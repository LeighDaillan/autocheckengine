import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import styles from "../../../../styles/Header.module.css";

const Break = function () {
  const [openBreak, setOpenBreak] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenBreak(!openBreak)}
        className={styles.link_dropdown}
      >
        <p className="text-sm mr-3">Break</p>
        {openBreak ? <BsChevronUp size={15} /> : <BsChevronDown size={15} />}
      </div>
      <ul className={`bg-white mt-2 px-5 ${openBreak ? "relative" : "hidden"}`}>
        <li className={styles.link_hover}>Break Fluid</li>
        <li className={styles.link_hover}>Break Pad</li>
      </ul>
    </>
  );
};

export default Break;
