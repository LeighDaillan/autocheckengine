import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);
import axios from "axios";

const BasketCheckout = function ({ basket }) {
  const { data: session, status } = useSession();

  const createCheckoutSession = async function () {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: basket,
      email: session.user.email,
    });

    // Redirect user/customer to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    // alert if have error
    if (result.error) alert(result.error.message);
  };

  const subTotal =
    basket.length === 0
      ? "0"
      : basket
          .map((item) => item.price)
          .reduce((preVal, curVal) => preVal + curVal)
          .toLocaleString("en-US");

  let shippingFee;

  // check if items for shipping cost
  if (basket.length < 3 && basket.length >= 1) {
    shippingFee = 1000;
  } else if (basket.length === 3) {
    shippingFee = 750;
  } else if (basket.length > 3 && basket.length <= 5) {
    shippingFee = 500;
  } else if (basket.length > 5 && basket.length <= 8) {
    shippingFee = 250;
  } else {
    shippingFee = 0;
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Summary</h1>
      <div className="border-b-2 border-gray-200 pb-5 grid grid-cols-2">
        <p className="text-left">Subtotal</p>
        <span className="text-right"> ₱ {subTotal}</span>
        <p className="text-left">Total Items</p>
        <span className="text-right"> {basket.length} Items</span>
        <p className="text-left">Estimated Delivery Fee</p>
        <span className="text-right">
          ₱ {!shippingFee ? 0 : shippingFee.toLocaleString("en-US")}
        </span>
      </div>

      <h2 className="my-5 text-xl font-bold">
        Total: ₱&nbsp;
        {(+subTotal.replaceAll(",", "") + shippingFee).toLocaleString("en-US")}
      </h2>

      <button
        role="link"
        disabled={!session}
        onClick={createCheckoutSession}
        className={`bg-black text-white px-3 py-2 rounded-full  text-xl my-5 w-full ${
          !session ? "opacity-75" : "cursor-pointer"
        }`}
      >
        {!session ? "Sign in to Proceed" : "Checkout"}
      </button>
    </>
  );
};

export default BasketCheckout;
