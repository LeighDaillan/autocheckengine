import Image from "next/image";
import { useState, useEffect } from "react";
import BasketCheckout from "/components/Basket-Checkout";

const BasketCard = function () {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("autoCheckBasket")));
  }, []);

  // Remove Handler
  const removeItemFromBasket = function (id) {
    // index of the item that will remove
    const index = basket.findIndex((basketItem) => basketItem.id === id);

    // Setting new array of basket
    let newBasket = [...basket];

    // removing item from the array
    newBasket.splice(index, 1);

    // setting new basket in local storage
    localStorage.setItem("autoCheckBasket", JSON.stringify(newBasket));

    // rendering the new basket
    setBasket(newBasket);
  };

  console.log(basket);
  return (
    <>
      <section className="col-span-2">
        {basket.map((basketItem) => {
          return (
            <div
              key={Math.random()}
              className="bg-white grid grid-cols-3 gap-7 my-5 rounded-lg p-4 "
            >
              <Image
                src={basketItem.displayImage}
                width="154"
                height="130"
                className="w-auto h-52 mx-auto"
                alt="Basket Item"
                priority
              />
              <div className="flex flex-col self-center col-span-2 max-w-xl ml-5">
                <h1 className="mb-1 text-xl">{basketItem.name}</h1>
                <p className="text-sm line-clamp-3">{basketItem.description}</p>
                <p className="text-xl my-5">
                  ₱ {basketItem.price.toLocaleString("en-US")}
                </p>
                <button
                  onClick={() => removeItemFromBasket(basketItem.id)}
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
        <BasketCheckout basket={basket} />
      </section>
    </>
  );
};

export default BasketCard;
