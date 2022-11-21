import Link from "next/link";
import Image from "next/image";
import { BsBagDash, BsPersonCircle, BsBoxSeam } from "react-icons/bs";
import Tires from "./Dropdown/tires";
import Wheels from "./Dropdown/wheels";
import Maintenance from "./Dropdown/maintenance";
import PartsAccecssories from "./Dropdown/parts-accessories";

const Header = function () {
  return (
    <nav className="grid grid-cols-2 lg:grid-cols-6 bg-white py-5 px-20 border-b">
      {/* Logo Design */}

      <div className="pl-10">
        <Image
          src="https://autocheckengine.vercel.app/_next/image?url=%2Fimages%2Fauto-check-engine-logo.jpg&w=96&q=75"
          width="75"
          height="75"
          className="cursor-pointer w-auto h-auto"
          alt="logo"
        />
      </div>

      {/* Navigation Link */}
      <ul className="flex justify-between self-center px-10 text-lg col-span-3">
        <li>
          <Tires />
        </li>
        <li>
          <Wheels />
        </li>
        <li>
          <Maintenance />
        </li>
        <li>
          <PartsAccecssories />
        </li>
      </ul>
      {/* Basket, Orders, and Account */}
      <div className="flex justify-self-end self-center text-black mr-4 lg:col-span-2">
        <Link href="/">
          <div className="cursor-pointer mx-5 flex self-center transform transition duration-500 p-2 hover:bg-gray-200 rounded-lg">
            <BsBagDash size="25" className="mr-1" />
            <p className="text-lg">Basket</p>
          </div>
        </Link>
        <Link href="/">
          <div className="cursor-pointer mx-5 flex self-center transform transition duration-500 p-2 hover:bg-gray-200 rounded-lg">
            <BsBoxSeam size="25" className="mr-1" />
            <p className="text-lg">Orders</p>
          </div>
        </Link>

        <div className="cursor-pointer mx-5 flex self-center transform transition duration-500 p-2 hover:bg-gray-200 rounded-lg">
          <BsPersonCircle size="25" className="mr-1" />
          <p className="text-lg">Account</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
