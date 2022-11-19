import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import styles from "../../../styles/Header.module.css";

const Tires = function () {
  const [openTires, setOpenTires] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenTires(!openTires)}
        className={styles.link_dropdown}
      >
        <p className="text-lg mr-3">Tires</p>
        {openTires ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 border px-5 ${
          openTires ? "absolute" : "hidden"
        }`}
      >
        <li className={styles.link_hover}>Bridgestone</li>
        <li className={styles.link_hover}>Michelin</li>
        <li className={styles.link_hover}>Toyo Tires</li>
      </ul>
    </>
  );
};

export default Tires;
