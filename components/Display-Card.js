import Image from "next/image";

const DisplayCard = function ({ product }) {
  return (
    <>
      {Object.values(product).map((item) => {
        return (
          <div key={item.price} className="bg-white p-5 border">
            <Image
              src={item.displayImage}
              width="600"
              height="600"
              alt="Item"
              priority
              className="cursor-pointer transform transition duration-500 hover:scale-75 w-auto h-60 mx-auto"
            />
            <h2 className="text-sm cursor-pointer my-2 text-gray-600 hover:text-black hover:underline ">
              {item.name}
            </h2>
            <p className="text-lg">₱ {item.price.toLocaleString("en-US")}.00</p>
            <div className="flex ">
              <button className="my-3 border text-gray-500 border-gray-500 py-3 w-full text-base hover:text-black hover:border-black hover:border-2 transform transition duration-500 ">
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayCard;
