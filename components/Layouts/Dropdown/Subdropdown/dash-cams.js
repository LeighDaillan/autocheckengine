import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const DashCams = function () {
  const [openDashCams, setOpenDashCams] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenDashCams(!openDashCams)}
        className="cursor-pointer hover:underline text-gray-600 hover:text-black  px-2 flex items-center rounded"
      >
        <p className="text-sm mr-3">Dash Cams</p>
        {openDashCams ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 px-5 ${openDashCams ? "relative" : "hidden"}`}
      >
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          DDPAI Dashcams
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          TRANSCEND
        </li>
      </ul>
    </>
  );
};

export default DashCams;
