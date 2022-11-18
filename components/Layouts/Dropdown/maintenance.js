import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import Engine from "./Subdropdown/engine";
import Break from "./Subdropdown/break";
import Filter from "./Subdropdown/filter";

const Maintenance = function () {
  const [openMaintenance, setOpenMaintenance] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenMaintenance(!openMaintenance)}
        className="cursor-pointer hover:underline text-gray-600 hover:text-black  px-2 flex items-center justify-between rounded"
      >
        <p className="text-lg mr-3">Maintenance</p>
        {openMaintenance ? (
          <BsChevronUp size={15} />
        ) : (
          <BsChevronDown size={15} />
        )}
      </div>
      <ul
        className={`bg-white mt-2 border px-5 ${
          openMaintenance ? "absolute" : "hidden"
        }`}
      >
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          <Engine />
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          <Break />
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          <Filter />
        </li>
      </ul>
    </>
  );
};

export default Maintenance;
