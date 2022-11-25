import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import styles from "../../../styles/Header.module.css";
import Link from "next/link";

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
        className={`bg-white mt-2 border px-5 z-10 ${
          openWheels ? "absolute" : "hidden"
        }`}
      >
        <li className={styles.link_hover}>
          <Link href="/Wheels/ats">ATS</Link>
        </li>
        <li className={styles.link_hover}>
          <Link href="/Wheels/bbs">BBS</Link>
        </li>
        <li className={styles.link_hover}>
          <Link href="/Wheels/oz-racing">OZ Racing</Link>
        </li>
      </ul>
    </>
  );
};

export default Wheels;
