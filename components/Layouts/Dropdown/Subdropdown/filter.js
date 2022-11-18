import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const Filter = function () {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className="cursor-pointer hover:underline text-gray-600 hover:text-black  px-2 flex items-center rounded"
      >
        <p className="text-sm mr-3">Filter</p>
        {openFilter ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 px-5 ${openFilter ? "relative" : "hidden"}`}
      >
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Air Filter
        </li>
        <li className="p-2 text-sm text-gray-600 hover:text-black cursor-pointer">
          Oil Filter
        </li>
      </ul>
    </>
  );
};

export default Filter;
