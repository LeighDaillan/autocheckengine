import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import styles from "../../../../styles/Header.module.css";

const DashCams = function () {
  const [openDashCams, setOpenDashCams] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenDashCams(!openDashCams)}
        className={styles.link_dropdown}
      >
        <p className="text-sm mr-3">Dash Cams</p>
        {openDashCams ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul
        className={`bg-white mt-2 px-5 ${openDashCams ? "relative" : "hidden"}`}
      >
        <li className={styles.link_hover}>DDPAI Dashcams</li>
        <li className={styles.link_hover}>TRANSCEND</li>
      </ul>
    </>
  );
};

export default DashCams;
