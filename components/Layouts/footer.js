import { useContext } from "react";
import Link from "next/link";
import {
  BsFillPinMapFill,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import styles from "../../styles/Layout.module.css";
import { CheckoutContext } from "../CheckoutContextProvider";

const Footer = function () {
  const { user } = useContext(CheckoutContext);
  return (
    <footer className="bg-black text-white h-auto px-24 py-8">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <h3 className="text-xl mb-2">Auto Check Engine</h3>

        <div className="text-black flex justify-self-end">
          <div className={styles.icon_hover}>
            <Link href="https://www.facebook.com/Milagro.rog">
              <BsFacebook size={30} />
            </Link>
          </div>

          <div className={styles.icon_hover}>
            <Link href="https://www.instagram.com/franco_daillan/">
              <BsInstagram size={30} />
            </Link>
          </div>

          <div className={styles.icon_hover}>
            <Link href="https://github.com/LeighDaillan">
              <BsGithub size={30} />
            </Link>
          </div>
          <div className={styles.icon_hover}>
            <BsTwitter size={30} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-5">
        <div className="flex m-2 mt-5">
          <BsFillPinMapFill size={20} className="mr-2" />
          <Link href="https://www.google.com/maps/d/viewer?hl=en&mid=1B7R7twHFRVl_m1OqdLh6OQmURAw&ll=15.024220000000001%2C120.68813000000004&z=17">
            San Fernando, Pampanga, Philippines
          </Link>
        </div>
        <p className="m-2 mt-5 justify-self-end text-gray-500 text-sm">
          © 2022 Auto Check Engine, Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
