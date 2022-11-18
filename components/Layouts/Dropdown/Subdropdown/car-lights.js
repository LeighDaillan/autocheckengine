import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const CarLights = function () {
  const [openCarLights, setOpenCarLights] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenCarLights(!openCarLights)}
        className="cursor-pointer hover:underline text-gray-600 hover:text-black  px-2 flex items-center rounded"
      >
        <p className="text-sm mr-3">Car Lights</p>
        {openCarLights ? (
          <BsChevronUp size={15} />
        ) : (
          <BsChevronDown size={15} />
        )}
      </div>
      <ul
        className={`bg-white mt-2 px-5 ${
          openCarLights ? "relative" : "hidden"
        }`}
      >
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          CARMATE Light
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          HELLA
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          COBRA
        </li>
      </ul>
    </>
  );
};

export default CarLights;
