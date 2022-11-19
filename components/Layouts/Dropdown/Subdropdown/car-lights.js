import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import styles from "../../../../styles/Header.module.css";

const CarLights = function () {
  const [openCarLights, setOpenCarLights] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenCarLights(!openCarLights)}
        className={styles.link_dropdown}
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
        <li className={styles.link_hover}>CARMATE Light</li>
        <li className={styles.link_hover}>HELLA</li>
        <li className={styles.link_hover}>COBRA</li>
      </ul>
    </>
  );
};

export default CarLights;
