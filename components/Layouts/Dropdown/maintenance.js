import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import Engine from "./Subdropdown/engine";
import Break from "./Subdropdown/break";
import styles from "../../../styles/Header.module.css";

const Maintenance = function () {
  const [openMaintenance, setOpenMaintenance] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenMaintenance(!openMaintenance)}
        className={styles.link_dropdown}
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
        <li className={styles.link_hover}>
          <Engine />
        </li>
        <li className={styles.link_hover}>
          <Break />
        </li>
      </ul>
    </>
  );
};

export default Maintenance;
