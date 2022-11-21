import Image from "next/image";

const FeaturedCard = function ({ product }) {
  const data = product;

  return (
    <>
      {Object.values(data).map((item) => {
        return (
          <div key={item.price} className="bg-white p-5  border">
            <Image
              src={item.displayImage}
              width="600"
              height="600"
              alt="Item"
              priority
              className="cursor-pointer transform transition duration-500 hover:scale-75 h-60"
            />
            <h2 className="text-sm cursor-pointer my-2 text-gray-600 hover:text-black hover:underline ">
              {item.name}
            </h2>
            <p className="text-lg">₱ {item.price}.00</p>
          </div>
        );
      })}
    </>
  );
};

export default FeaturedCard;
