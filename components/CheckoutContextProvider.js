import React, { useState, createContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const CheckoutContext = createContext();

const CheckoutContextProvider = ({ ...props }) => {
  const { data: status } = useSession();
  const [currentBasketCount, setCurrentBasketCount] = useState(0);

  let basket = [];
  const [basketItem, setBasketItem] = useState();

  // Setting local storage
  const setLocalStorage = function () {
    localStorage.setItem("autoCheckBasket", JSON.stringify(basket));
  };

  // getting data from local storage
  const getLocalStorage = function () {
    const dataBasket = JSON.parse(localStorage.getItem("autoCheckBasket"));
    if (!dataBasket) return;

    basket = dataBasket;
  };

  useEffect(() => {
    getLocalStorage();
    setBasketItem(JSON.parse(localStorage.getItem("autoCheckBasket")));
    setCurrentBasketCount(
      JSON.parse(localStorage.getItem("autoCheckBasket")).length
    );
  }, []);

  // adding data in localstorage
  const addToBasket = function (item) {
    // Redirect if not sign in
    if (!status) return router.push("/login");

    // Adding item in array
    basket.push(item);
    setLocalStorage();

    // updating the basket item
    setCurrentBasketCount(basket.length);

    // Passing the item in basket
    setBasketItem(basket);
  };

  // Label Animation
  const labelAnimation = function (id) {
    // animation
    document.getElementById(`addButton${id}`).textContent = "Added to Basket ✓";

    setTimeout(() => {
      document.getElementById(`addButton${id}`).textContent = "Add to Basket";
    }, 500);
  };

  const router = useRouter();
  const dynamicRouter = function (id) {
    // Check if items belongs to Tires Category
    if (id.slice(0, 1) === "T") {
      return router.push(`/Tires/${id}`);
    }

    // Check if items belongs to Wheels Category
    if (id.slice(0, 1) === "W") {
      return router.push(`/Wheels/${id}`);
    }

    // Check if items belongs to Maintenance/Break Category
    if (id.slice(0, 2) === "MB") {
      return router.push(`/Maintenance/Break/${id}`);
    }

    // Check if items belongs to Maintenance/Engine Category
    if (id.slice(0, 2) === "ME") {
      return router.push(`/Maintenance/Engine/${id}`);
    }

    // Check if items belongs to Parts-and-Accessories/car-lights Category
    if (id.slice(0, 3) === "PAC") {
      return router.push(`/Parts-and-Accessories/Car-Lights/${id}`);
    }

    // Check if items belongs to Parts-and-Accessories/dash-cams Category
    if (id.slice(0, 3) === "PAD") {
      return router.push(`/Parts-and-Accessories/Dash-Cams/${id}`);
    }
  };

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
    setBasketItem(newBasket);

    setCurrentBasketCount(newBasket.length);
  };

  return (
    <CheckoutContext.Provider
      value={{
        user: status,
        addToBasket,
        labelAnimation,
        dynamicRouter,
        currentBasketCount,
        basketItem,
        removeItemFromBasket,
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
