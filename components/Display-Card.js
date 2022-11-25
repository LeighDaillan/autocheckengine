import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const DisplayCard = function ({ product }) {
  const { data: status } = useSession();

  const router = useRouter();

  let basket = [];

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

  // Setting local storage
  const setLocalStorage = function () {
    localStorage.setItem("autoCheckBasket", JSON.stringify(basket));
  };

  // getting data from local storage
  const getLocalStorage = function () {
    const dataBasket = JSON.parse(localStorage.getItem("autoCheckBasket"));
    console.log(dataBasket);
    if (!dataBasket) return;

    basket = dataBasket;
  };

  useEffect(() => {
    getLocalStorage();
  });

  // adding data in localstorage
  const addToCart = function (item) {
    // Redirect if not sign in
    if (!status) return router.push("/login");

    // console.log(typeof basket);
    basket.push(item);
    setLocalStorage();

    // animation
    document.getElementById(`addButton${item.id}`).textContent =
      "Added to Basket ✓";

    setTimeout(() => {
      document.getElementById(`addButton${item.id}`).textContent =
        "Add to Basket";
    }, 1000);
  };
  return (
    <>
      {Object.values(product).map((item) => {
        return (
          <div key={item.id} className="bg-white p-5 border">
            <Image
              src={item.displayImage}
              width="600"
              height="600"
              alt="Item"
              priority
              className="cursor-pointer transform transition duration-500 hover:scale-75 w-auto h-60 mx-auto"
            />
            <h2
              onClick={() => dynamicRouter(item.id)}
              className="text-sm cursor-pointer my-2 text-gray-600 hover:text-black hover:underline "
            >
              {item.name}
            </h2>
            <p className="text-lg">₱ {item.price.toLocaleString("en-US")}.00</p>
            <div className="flex ">
              <button
                onClick={() => addToCart(item)}
                id={`addButton${item.id}`}
                className="my-3 border text-gray-500 border-gray-500 py-3 w-full text-base hover:text-black hover:border-black hover:border-2 transform transition duration-500 "
              >
                {!status ? "Sign in to Buy" : "Add to Basket"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayCard;
