"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { termsCondition, feedback, buyOnline } from "./links";

const Header = () => {
  const [active, setActive] = useState(0);
  const [mouse, setMouse] = useState(0);
  const [nav, setNav] = useState(false);
  const [navClick, setNavClick] = useState(0);

  const handleNav = (index: number) => {
    setNavClick(index);
  };

  const handleClick = (index: number) => {
    setActive(index);
  };
  const handleToggle = () => {
    setNav(!nav);
  };
  const handleMouseOn = (index: number) => {
    setMouse(index);
  };
  const handleMouseOff = () => {
    setMouse(0);
  };

  const closeNav = () => {
    setNav(!nav);
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
            <Link
              href={"/"}
              onClick={() => handleClick(1)}
              className={`text-xl font-poppin uppercase p-2  font-semibold hover:text-primary ${
                active === 1 && "border-t-4 border-primary text-primary"
              }`}
            >
              Home
            </Link>
            <div className="flex justify-center relative">
              <Link
                href={"/buy-online"}
                onClick={() => handleClick(4)}
                onMouseOver={() => handleMouseOn(4)}
                onMouseLeave={handleMouseOff}
                className={`text-xl font-poppin uppercase p-2  font-semibold hover:text-primary ${
                  active === 4 && "border-t-4 border-primary text-primary"
                }`}
              >
                Buy Online
              </Link>
              {mouse === 4 && (
                <ul
                  className="absolute grid z-[99] bg-primary text-white p-5 text-lg font-poppin font-medium uppercase rounded-lg top-[98%] w-[320px] text-center border-primary"
                  onMouseOver={() => handleMouseOn(4)}
                  onMouseLeave={handleMouseOff}
                >
                  {buyOnline.map((item, index) => (
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
            <div className="flex justify-center relative">
              <Link
                href={"/about"}
                onClick={() => handleClick(5)}
                onMouseOver={() => handleMouseOn(5)}
                onMouseLeave={handleMouseOff}
                className={`text-xl font-poppin uppercase p-2  font-semibold hover:text-primary ${
                  active === 5 && "border-t-4 border-primary text-primary"
                }`}
              >
                About
              </Link>
              {mouse === 5 && (
                <ul
                  className="absolute grid z-[99] bg-primary text-white p-5 text-lg font-poppin font-medium uppercase rounded-lg top-[98%] w-[300px] text-center border-primary"
                  onMouseOver={() => handleMouseOn(5)}
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
                active === 6 && "border-t-4 border-primary text-primary"
              }`}
            >
              Contact Us
            </Link>
            <div className="flex justify-center relative">
              <p
                onMouseOver={() => handleMouseOn(7)}
                onMouseLeave={handleMouseOff}
                className="cursor-pointer text-xl font-poppin uppercase p-2  font-semibold hover:text-primary "
              >
                T & C
              </p>
              {mouse === 7 && (
                <ul
                  className="absolute grid z-[99] bg-primary text-white p-5 text-lg font-poppin font-medium uppercase rounded-lg top-[98%] w-[300px] text-center border-primary"
                  onMouseOver={() => handleMouseOn(7)}
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
            {!nav && <GiHamburgerMenu size={35} />}
          </div>
          <div
            className={`grid text-center z-50 bg-primary h-screen w-full top-0 right-0 left-0 bottom-0 overflow-y-visible border-b-2 fixed overscroll-none ${
              nav ? "grid transition_nav lg:hidden" : "hidden"
            }`}
          >
            <div className="absolute top-[2%] right-[3%] text-white">
              <AiOutlineClose size={35} onClick={handleToggle} />
            </div>
            <div className="border border-black flex flex-col w-screen h-screen justify-center items-center ">
              <Link
                href={"/"}
                onClick={() => handleClick(1)}
                className={`text-3xl font-poppin uppercase p-2 text-white font-black tracking-wider`}
              >
                <div onClick={closeNav}>Home</div>
              </Link>
              <div className="flex flex-col justify-center relative">
                <p
                  onClick={() => handleNav(2)}
                  className={`text-3xl font-poppin uppercase p-2 text-white font-black tracking-wider`}
                >
                  {navClick === 2 ? "-" : "+"} Buy Online
                </p>
                {navClick === 2 && (
                  <ul className="flex flex-col bg-primary text-white text-base font-poppin font-medium uppercase w-full text-center transition_nav">
                    {buyOnline.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-xl font-poppin uppercase p-2 hover:text-black"
                      >
                        <div onClick={closeNav}>{item.link}</div>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex flex-col justify-center relative">
                <p
                  onClick={() => handleNav(3)}
                  className={`text-3xl font-poppin uppercase p-2 text-white font-black tracking-wider`}
                >
                  {navClick === 3 ? "-" : "+"} About
                </p>
                {navClick === 3 && (
                  <ul className="flex flex-col bg-primary text-white text-base font-poppin font-medium uppercase w-full text-center transition_nav">
                    {feedback.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-xl font-poppin uppercase p-2 hover:text-black"
                      >
                        <div onClick={closeNav}>{item.link}</div>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
              <Link
                href={"/contact"}
                className={`text-3xl font-poppin uppercase p-2 text-white font-black tracking-wider`}
              >
                <div onClick={closeNav}>Contact Us</div>
              </Link>
              <div className="flex flex-col justify-center relative">
                <p
                  onClick={() => handleNav(4)}
                  className={`text-3xl font-poppin uppercase p-2 text-white font-black tracking-wider`}
                >
                  {navClick === 4 ? "-" : "+"} T & C
                </p>
                {navClick === 4 && (
                  <ul className="flex flex-col bg-primary text-white text-base font-poppin font-medium uppercase w-full text-center transition_nav">
                    {termsCondition.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-xl font-poppin uppercase p-2 hover:text-black"
                      >
                        <div onClick={closeNav}>{item.link}</div>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
