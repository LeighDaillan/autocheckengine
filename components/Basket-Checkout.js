import { useState, useEffect } from "react";

const BasketCheckout = function ({ basket }) {
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

      <button className="bg-black text-white px-3 py-2 rounded-full cursor-pointer text-xl my-5 w-full">
        Checkout
      </button>
    </>
  );
};

export default BasketCheckout;
