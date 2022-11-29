import { useContext } from "react";
import Image from "next/image";
import BasketCheckout from "/components/Basket-Checkout";
import { CheckoutContext } from "./CheckoutContextProvider";

const BasketCard = function () {
  const { basketItem, removeItemFromBasket } = useContext(CheckoutContext);

  return (
    <>
      <section className="col-span-2">
        {basketItem?.map((basket) => {
          return (
            <div
              key={Math.random()}
              className="bg-white grid grid-cols-3 gap-7 my-5 rounded-lg p-4 "
            >
              <Image
                src={basket.displayImage}
                width="154"
                height="130"
                className="w-auto h-52 mx-auto"
                alt="Basket Item"
                priority
              />
              <div className="flex flex-col self-center col-span-2 max-w-xl ml-5">
                <h1 className="mb-1 text-xl">{basket.name}</h1>
                <p className="text-sm line-clamp-2">{basket.description}</p>
                <p className="text-xl my-5">
                  ₱ {basket.price.toLocaleString("en-US")}
                </p>
                <button
                  onClick={() => removeItemFromBasket(basket.id)}
                  className="border-2 border-gray-300 px-3 py-2 rounded-sm  duration-300 hover:bg-red-600 hover:text-white text-sm"
                >
                  Remove From Basket
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <section className="text-center">
        <BasketCheckout basket={basketItem} />
      </section>
    </>
  );
};

export default BasketCard;
