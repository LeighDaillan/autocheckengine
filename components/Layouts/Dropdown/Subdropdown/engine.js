import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import styles from "../../../../styles/Header.module.css";

const Engine = function () {
  const [openEngine, setOpenEngine] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenEngine(!openEngine)}
        className={styles.link_dropdown}
      >
        <p className="text-sm mr-3">Engine</p>
        {openEngine ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 px-5 ${openEngine ? "relative" : "hidden"}`}
      >
        <li className={styles.link_hover}>Additive</li>
        <li className={styles.link_hover}>Engine Oil</li>
        <li className={styles.link_hover}>Gear Oil</li>
        <li className={styles.link_hover}>Battery</li>
      </ul>
    </>
  );
};

export default Engine;
