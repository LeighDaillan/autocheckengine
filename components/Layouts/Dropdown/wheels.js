import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import styles from "../../../styles/Header.module.css";

const Wheels = function () {
  const [openWheels, setOpenWheels] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenWheels(!openWheels)}
        className={styles.link_dropdown}
      >
        <p className="text-lg mr-3">Wheels</p>
        {openWheels ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 border px-5 ${
          openWheels ? "absolute" : "hidden"
        }`}
      >
        <li className={styles.link_hover}>ATS</li>
        <li className={styles.link_hover}>BBS</li>
        <li className={styles.link_hover}>OZ Racing</li>
      </ul>
    </>
  );
};

export default Wheels;
