"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { links, termsCondition, feedback } from "./links";

const Header = () => {
  const [active, setActive] = useState(0);
  const [mouse, setMouse] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = (index: number) => {
    setActive(index);
  };
  const handleToggle = () => {
    setNav(!nav);
  };
  const handleMouseOn = () => {
    setMouse(true);
  };
  const handleMouseOff = () => {
    setMouse(false);
  };

  return (
    <div>
      <div className="border-b-4 border-primary">
        <div className="lg:max-w-[1600px] mx-auto pt-6">
          <div className="grid lg:grid-cols-3 lg:justify-between justify-center">
            <div>
              <Image
                src={"/Petisserie logo.png"}
                width={160}
                height={160}
                alt="Petisserie Logo"
                priority
              />
            </div>
            <Link
              href={"/"}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="grid">
                <p className="font-oleo text-6xl text-primary underline">
                  Petissier
                </p>
                <p className="text-center font-poppin font-light my-1 text-gray-600">
                  A DOG & CAT PASTRY CO.
                </p>
              </div>
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
                key={index}
                href={link.href}
                onClick={() => handleClick(index)}
                className={`text-xl font-poppin uppercase p-2  font-semibold hover:text-primary ${
                  active === index && "border-t-4 border-primary text-primary"
                }`}
              >
                {link.link}
              </Link>
            ))}
            <div className="flex justify-center relative">
              <Link
                href={"/about"}
                onClick={() => handleClick(5)}
                onMouseOver={handleMouseOn}
                onMouseLeave={handleMouseOff}
                className={`text-xl font-poppin uppercase p-2  font-semibold hover:text-primary ${
                  active === 5 && "border-t-4 border-primary text-primary"
                }`}
              >
                About
              </Link>
              {mouse && (
                <ul
                  className="absolute grid z-[99] bg-primary text-white p-5 text-lg font-poppin font-medium uppercase rounded-lg top-[98%] w-[300px] text-center border-x-4 border-y-2 border-primary"
                  onMouseOver={handleMouseOn}
                  onMouseLeave={handleMouseOff}
                >
                  {feedback.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-xl font-poppin uppercase p-2 hover:text-black"
                    >
                      {item.link}
                    </Link>
                  ))}
                </ul>
              )}
            </div>
            <Link
              href={"/contact"}
              onClick={() => handleClick(4)}
              className={`text-xl font-poppin uppercase p-2  font-semibold hover:text-primary ${
                active === 4 && "border-t-4 border-primary text-primary"
              }`}
            >
              Contact Us
            </Link>
            <div className="flex justify-center relative">
              <p
                onMouseOver={handleMouseOn}
                onMouseLeave={handleMouseOff}
                className="cursor-pointer text-xl font-poppin uppercase p-2  font-semibold hover:text-primary "
              >
                T & C
              </p>
              {mouse && (
                <ul
                  className="absolute grid z-[99] bg-primary text-white p-5 text-lg font-poppin font-medium uppercase rounded-lg top-[98%] w-[300px] text-center border-x-4 border-y-2 border-primary"
                  onMouseOver={handleMouseOn}
                  onMouseLeave={handleMouseOff}
                >
                  {termsCondition.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-xl font-poppin uppercase p-2 hover:text-black"
                    >
                      {item.link}
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div
            className="flex lg:hidden justify-center my-3"
            onClick={handleToggle}
          >
            {!nav ? (
              <GiHamburgerMenu size={35} />
            ) : (
              <AiOutlineClose size={35} />
            )}
          </div>
          <div
            className={`grid border-t-2 border-black text-center z-50 absolute bg-white w-full border-b-2 ${
              nav ? "grid transition_nav lg:hidden" : "hidden"
            }`}
          >
            {links.map((link, index) => (
              <Link
                key={index}
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
    </div>
  );
};

export default Header;
