import Link from "next/link";
import Image from "next/image";
import { BsBagDash, BsPersonCircle, BsBoxSeam } from "react-icons/bs";
import Tires from "./Dropdown/tires";
import Wheels from "./Dropdown/wheels";
import Maintenance from "./Dropdown/maintenance";
import PartsAccecssories from "./Dropdown/parts-accessories";
import { useRouter } from "next/router";

const Header = function () {
  const router = useRouter();
  return (
    <nav
      className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5
     bg-white p-5 md:py-5 md:px-20 border-b text-center"
    >
      {/* Logo Design */}

      <div className="flex justify-center sm:relative  pl-10 my-5 md:col-span-2 lg:col-span-1 sm:justify-self-center">
        <Image
          onClick={() => router.push("/")}
          src="https://autocheckengine.vercel.app/_next/image?url=%2Fimages%2Fauto-check-engine-logo.jpg&w=96&q=75"
          width="75"
          height="75"
          className="cursor-pointer w-auto h-24"
          alt="logo"
          priority
        />
      </div>

      {/* Navigation Link */}
      <ul className="flex justify-between self-center px-10 text-lg col-span-2 lg:col-span-3">
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
      <div className="flex justify-self-end self-center text-black mr-4 md:col-span-2 lg:col-span-1  ">
        <Link href="/Basket">
          <div className="cursor-pointer mx-5 flex self-center transform transition duration-500 p-2 hover:bg-gray-200 rounded-lg">
            <BsBagDash size="25" className="mr-1" />
            <p className="text-lg">Basket</p>
          </div>
        </Link>
        <Link href="/Account">
          <div className="cursor-pointer mx-5 flex self-center transform transition duration-500 p-2 hover:bg-gray-200 rounded-lg">
            <BsPersonCircle size="25" className="mr-1" />
            <p className="text-lg">Account</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
