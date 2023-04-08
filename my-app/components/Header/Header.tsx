"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import links from "./links";

const Header = () => {
  const [active, setActive] = useState(1);
  const [nav, setNav] = useState(false);
  const handleClick = (index: number) => {
    setActive(index);
  };
  const handleToggle = () => {
    setNav(!nav);
  };

  return (
    <div className="border-b-4 border-primary">
      <div className="lg:max-w-[1600px] mx-auto pt-6">
        <div className="grid lg:grid-cols-3 lg:justify-between justify-center">
          <div>
            <Image
              src={"/Petisserie logo.png"}
              width={160}
              height={160}
              alt="Petisserie Logo"
            />
          </div>
          <Link
            href={"/"}
            className="hidden lg:flex justify-center items-center font-oleo text-6xl text-primary underline"
          >
            Petissier
          </Link>
          <div className="hidden lg:flex justify-end items-center space-x-8">
            <FaShoppingCart
              size={40}
              className="text-primary hover:scale-125 duration-300 cursor-pointer"
            />
            <Link
              href={"/"}
              className="flex items-center space-x-2 bg-primary p-3 rounded-lg text-white font-poppin hover:scale-105 duration-300"
            >
              <FaUserCircle size={35} className="" />
              <p className="font-bold">Log In</p>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-around items-end space-x-10 mt-8">
          {links.map((link, index) => (
            <Link
              href={link.href}
              onClick={() => handleClick(index)}
              className={`text-xl font-poppin uppercase p-2  font-semibold hover:text-primary ${
                active === index && "border-t-4 border-primary text-primary"
              }`}
            >
              {link.link}
            </Link>
          ))}
        </div>
        <div
          className="flex lg:hidden justify-center my-3"
          onClick={handleToggle}
        >
          <GiHamburgerMenu size={35} />
        </div>
        <div
          className={`grid border-t-2 border-black text-center ${
            nav ? "grid transition_nav lg:hidden" : "hidden"
          }`}
        >
          {links.map((link, index) => (
            <Link
              href={link.href}
              onClick={() => handleClick(index)}
              className={`text-xl font-poppin uppercase p-2  font-semibold hover:text-primary ${
                active === index && " text-primary"
              }`}
            >
              {link.link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
