import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const Tires = function () {
  const [openTires, setOpenTires] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenTires(!openTires)}
        className="cursor-pointer hover:underline text-gray-600 hover:text-black  px-2 flex items-center justify-between rounded"
      >
        <p className="text-lg mr-3">Tires</p>
        {openTires ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 border px-5 ${
          openTires ? "absolute" : "hidden"
        }`}
      >
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Bridgestone
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Michelin
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Toyo Tires
        </li>
      </ul>
    </>
  );
};

export default Tires;
