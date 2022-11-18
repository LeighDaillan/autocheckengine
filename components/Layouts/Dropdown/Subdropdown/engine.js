import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const Engine = function () {
  const [openEngine, setOpenEngine] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenEngine(!openEngine)}
        className="cursor-pointer hover:underline text-gray-600 hover:text-black  px-2 flex items-center rounded"
      >
        <p className="text-sm mr-3">Engine</p>
        {openEngine ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 px-5 ${openEngine ? "relative" : "hidden"}`}
      >
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Additive
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Engine Oil
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Gear Oil
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Battery
        </li>
      </ul>
    </>
  );
};

export default Engine;
