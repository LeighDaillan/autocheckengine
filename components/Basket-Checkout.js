import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "./CheckoutContextProvider";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);
import axios from "axios";

const BasketCheckout = function () {
  const { user, checkoutItems, checkoutSubtotal, basketCount } =
    useContext(CheckoutContext);

  const createCheckoutSession = async function () {
    // guard clause
    if (basketCount === 0) return;

    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: checkoutItems,
      email: user.user.email,
    });

    // Redirect user/customer to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    // alert if have error
    if (result.error) alert(result.error.message);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Summary</h1>
      <div className="border-b-2 border-gray-200 pb-5 grid grid-cols-2">
        <p className="text-left">Subtotal</p>
        <span className="text-right">₱ {checkoutSubtotal}</span>
        <p className="text-left">Total Items</p>
        <span className="text-right"> {basketCount} Items</span>
      </div>

      <h2 className="my-5 text-xl font-bold">
        Total: ₱&nbsp;
        {checkoutSubtotal}
      </h2>

      <button
        role="link"
        disabled={!user}
        onClick={createCheckoutSession}
        className={`bg-black text-white px-3 py-2 rounded-full  text-xl my-5 w-full ${
          !user ? "opacity-75" : "cursor-pointer"
        }`}
      >
        {!user ? "Sign in to Proceed" : "Checkout"}
      </button>
    </>
  );
};

export default BasketCheckout;
