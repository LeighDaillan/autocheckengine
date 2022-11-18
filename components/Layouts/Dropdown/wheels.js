import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const Wheels = function () {
  const [openWheels, setOpenWheels] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenWheels(!openWheels)}
        className="cursor-pointer hover:underline text-gray-600 hover:text-black  px-2 flex items-center justify-between rounded"
      >
        <p className="text-lg mr-3">Wheels</p>
        {openWheels ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 border px-5 ${
          openWheels ? "absolute" : "hidden"
        }`}
      >
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          ATS
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          BBS
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          OZ Racing
        </li>
      </ul>
    </>
  );
};

export default Wheels;
