import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import CarLights from "./Subdropdown/car-lights";
import DashCams from "./Subdropdown/dash-cams";

const PartsAccecssories = function () {
  const [openPartsAccecssories, setOpenPartsAccecssories] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenPartsAccecssories(!openPartsAccecssories)}
        className="cursor-pointer hover:underline text-gray-600 hover:text-black  px-2 flex items-center justify-between rounded"
      >
        <p className="text-lg mr-3">Parts and Accessories</p>
        {openPartsAccecssories ? (
          <BsChevronUp size={15} />
        ) : (
          <BsChevronDown size={15} />
        )}
      </div>
      <ul
        className={`bg-white mt-2 border px-5 ${
          openPartsAccecssories ? "absolute" : "hidden"
        }`}
      >
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          <CarLights />
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          <DashCams />
        </li>
      </ul>
    </>
  );
};

export default PartsAccecssories;
