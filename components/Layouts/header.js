import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsBagDash, BsPersonCircle } from "react-icons/bs";
import Tires from "./Dropdown/tires";
import Wheels from "./Dropdown/wheels";
import Maintenance from "./Dropdown/maintenance";
import PartsAccecssories from "./Dropdown/parts-accessories";
import { useRouter } from "next/router";
import { CheckoutContext } from "../CheckoutContextProvider";

const Header = function () {
  const { user, basketCount } = useContext(CheckoutContext);
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
      <section className="flex justify-self-end self-center text-black mr-4 md:col-span-2 lg:col-span-1  ">
        <div className="cursor-pointer mx-2 transform transition duration-500 p-2 hover:bg-gray-200 rounded-lg">
          <Link href="/Basket" className="flex self-center">
            <BsBagDash size="25" className="mr-1" />
            <h1 className="text-lg">
              Basket
              <sup className="bg-black text-white rounded-full px-2 py-1 ml-1">
                {basketCount}
              </sup>
            </h1>
          </Link>
        </div>

        <div className="cursor-pointer mx-2 transform transition duration-500 p-2 hover:bg-gray-200 w-28 rounded-lg">
          <Link href="/Account" className="flex self-center">
            {user ? (
              <>
                <Image
                  src={user.user.image}
                  width={25}
                  height={10}
                  alt={`Welcome Back: ${user.user.name}`}
                  className="rounded-full w-auto h-8 mr-2"
                />
                <p className="text-lg font-bold">
                  {user?.user.name.split(" ")[0]}
                </p>
              </>
            ) : (
              <>
                <BsPersonCircle size="25" className="mr-1" />
                <p className="text-lg">Account</p>
              </>
            )}
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Header;
