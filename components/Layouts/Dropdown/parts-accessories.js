import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import CarLights from "./Subdropdown/car-lights";
import DashCams from "./Subdropdown/dash-cams";
import styles from "../../../styles/Header.module.css";

const PartsAccecssories = function () {
  const [openPartsAccecssories, setOpenPartsAccecssories] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenPartsAccecssories(!openPartsAccecssories)}
        className={styles.link_dropdown}
      >
        <p className="text-lg mr-3">Parts & Accessories</p>
        {openPartsAccecssories ? (
          <BsChevronUp size={15} />
        ) : (
          <BsChevronDown size={15} />
        )}
      </div>
      <ul
        className={`bg-white mt-2 border px-5 z-10 ${
          openPartsAccecssories ? "absolute" : "hidden"
        }`}
      >
        <li className={styles.link_hover}>
          <CarLights />
        </li>
        <li className={styles.link_hover}>
          <DashCams />
        </li>
      </ul>
    </>
  );
};

export default PartsAccecssories;
