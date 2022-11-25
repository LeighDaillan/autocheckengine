import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AddToBasket = function ({ product }) {
  const { data: session } = useSession();
  const item = product;

  // Router
  const router = useRouter();

  // label condition
  const [click, setClick] = useState(false);

  // basket array for localstorage
  let basket = [];

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
  }, []);

  const addItem = function () {
    // Check if sign in
    if (!session) return router.push("/login");
    // Add item to basket in localstorage
    basket.push(item);
    setLocalStorage();

    // Set the click to true
    setClick(true);

    // animation timer
    setTimeout(() => {
      setClick(false);
    }, 1000);
  };
  return (
    <button
      onClick={addItem}
      className="border  hover:text-black hover:border-black hover:border-4 transform transition duration-500 w-full py-5 rounded-sm text-xl "
    >
      {click ? "Added to Basket ✓" : "Add to Basket"}
    </button>
  );
};

export default AddToBasket;
