import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import styles from "../../../../styles/Header.module.css";

const Filter = function () {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className={styles.link_dropdown}
      >
        <p className="text-sm mr-3">Filter</p>
        {openFilter ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 px-5 ${openFilter ? "relative" : "hidden"}`}
      >
        <li className={styles.link_hover}>Air Filter</li>
        <li className={styles.link_hover}>Oil Filter</li>
      </ul>
    </>
  );
};

export default Filter;
