import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const Break = function () {
  const [openBreak, setOpenBreak] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenBreak(!openBreak)}
        className="cursor-pointer hover:underline text-gray-600 hover:text-black px-2 flex items-center rounded"
      >
        <p className="text-sm mr-3">Break</p>
        {openBreak ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul className={`bg-white mt-2 px-5 ${openBreak ? "relative" : "hidden"}`}>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Break Fluid
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Break Pad
        </li>
      </ul>
    </>
  );
};

export default Break;
