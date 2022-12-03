import { useContext } from "react";
import { CheckoutContext } from "./CheckoutContextProvider";

const AddToBasket = function ({ product }) {
  const { addToBasket, user, labelAnimation } = useContext(CheckoutContext);
  const item = product;
  return (
    <button
      onClick={() => {
        addToBasket(item);
        labelAnimation(item.id);
      }}
      id={`addButton${item.id}`}
      className="border  hover:text-black hover:border-black hover:border-4 transform transition duration-500 w-full py-5 rounded-sm text-xl "
    >
      {!user ? "Sign in to Buy" : "Add to Basket"}
    </button>
  );
};

export default AddToBasket;
