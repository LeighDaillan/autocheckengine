import React, { useState, createContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const CheckoutContext = createContext();

const CheckoutContextProvider = ({ ...props }) => {
  const getLocalStorage = (name) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(name);
    }
  };

  const setLocalStorage = (name, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(name, value);
    }
  };

  const { data: status } = useSession();

  // let basket = [];
  const [basketItem, setBasketItem] = useState();

  const [checkout, setCheckout] = useState(() => {
    const checkout = getLocalStorage("checkout");
    return checkout
      ? JSON.parse(checkout)
      : {
          count: 0,
          items: {},
        };
  });

  // Subtotal computation
  const [checkoutSubtotal, setCheckoutSubtotal] = useState();

  // Checkout total
  const [basketCount, setBasketCount] = useState(2);

  // Checkout Items in array
  const [checkoutItems, setCheckoutItems] = useState(
    Object.entries(checkout.items)?.map((v, key) => v[1])
  );

  // Listen if checkout state has been modified or tampered
  useEffect(() => {
    if (checkout.items && typeof window !== "undefined") {
      setLocalStorage("checkout", JSON.stringify(checkout));
    }

    // setting sub total amount of the items multipy in their qty
    setCheckoutSubtotal(() => {
      return Object.keys(checkout.items).length !== 0
        ? Object.entries(checkout.items)
            ?.map((v, key) => v[1])
            ?.map((item) => {
              return item.qty * item.price;
            })
            .reduce((preVal, curVal) => preVal + curVal)
            .toLocaleString("en-US")
        : 0;
    });

    // setting items in basket
    setBasketCount(checkout.count);

    // setting items in array
    setCheckoutItems(Object.entries(checkout.items)?.map((v, key) => v[1]));
  }, [checkout.items, checkout.count]); // anything happen in the checkout state this useEffect will fire immediately

  // adding data in localstorage
  const addToBasket = function (item) {
    // Redirect if not sign in
    if (!status) return router.push("/login");

    let qty;
    if (typeof checkout.items[item.id] === "undefined") {
      qty = 1;
    } else {
      qty = parseInt(checkout.items[item.id].qty + 1);
    }

    setCheckout((prevCheckout) => {
      return {
        ...prevCheckout,
        items: {
          ...prevCheckout.items,
          [item.id]: {
            ...item,
            qty: qty,
          },
        },
      };
    });

    let total = 1;
    Object.entries(checkout.items).map((item, index) => {
      total += item[1].qty;
    });

    setCheckout((prevCheckout) => {
      return {
        ...prevCheckout,
        count: total,
      };
    });
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
  const removeItemFromBasket = function (item) {
    // If item has more than 1 qty minus 1
    if (checkout.items[item.id].qty > 1) {
      return setCheckout((prevCheckout) => {
        return {
          count: parseInt(prevCheckout.count - 1),
          items: {
            ...prevCheckout.items,
            [item.id]: {
              ...item,
              qty: parseInt(checkout.items[item.id].qty - 1),
            },
          },
        };
      });
    } else {
      setCheckout((prevCheckout) => {
        delete prevCheckout.items[item.id];
        return {
          count: parseInt(prevCheckout.count - 1),
          items: {
            ...prevCheckout.items,
          },
        };
      });
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        user: status,
        addToBasket,
        labelAnimation,
        dynamicRouter,
        removeItemFromBasket,
        checkout,
        checkoutSubtotal,
        basketCount,
        checkoutItems,
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
