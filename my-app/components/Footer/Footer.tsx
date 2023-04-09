"use client";
import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard, FaGooglePay, FaApplePay } from "react-icons/fa";
import links from "../Footer/links";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary h-full">
      <div className="lg:max-w-[1600px] mx-auto py-20 px-3">
        <div className="grid lg:grid-cols-3 text-white font-poppin">
          <div>
            <div className="space-y-2 text-center lg:text-left">
              <p className="font-bold text-3xl">Our Flagship Store</p>
              <p className="text-xl">
                253 Joo Chiat Road, <br />
                Singapore 427507
              </p>
            </div>
            <div className="my-5 space-y-1 flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-2">
                <IoIosCall size={30} />
                <p className="text-xl font-semibold">+65 64404023</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail size={30} />
                <p className="text-xl font-semibold">petissier.sg@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="bg-white max-w-full text-black p-8 rounded-xl px-4">
              <p className="text-center text-2xl font-bold text-primary">
                Get Special Deals & Offers
              </p>
              <form action="" className="grid my-5 space-y-3">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email Address"
                  className="border rounded-md p-3 focus:outline-primary w-full"
                />
                <button className="bg-primary text-white py-3 font-bold hover:opacity-80 duration-300 ease-in-out">
                  Subscribe
                </button>
              </form>
            </div> */}
            <div>
              <p className="text-center font-semibold text-lg mt-5">
                Follow us for more updates!
              </p>
              <div className="flex items-center justify-center space-x-5 my-3">
                <a href="https://www.facebook.com/petissier.sg" target="blank">
                  <BsFacebook
                    size={40}
                    className="hover:scale-110 duration-300"
                  />
                </a>
                <a
                  href="https://www.instagram.com/petissier.sg/"
                  target="blank"
                >
                  <BsInstagram
                    size={40}
                    className="hover:scale-110 duration-300"
                  />
                </a>
              </div>
              <p className="text-center mt-10 px-2">
                All Right Reserved ©2022 by Petissier Singapore .
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:items-end items-center my-5 lg:my-0">
            <p className="font-bold text-3xl">Informations</p>
            <div className="flex flex-col lg:items-end space-y-1 text-lg my-2 items-center">
              {links.map((link, index) => (
                <Link key={index} href={link.href} className="hover:underline">
                  {link.link}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-3xl font-bold mt-5 lg:mt-2 lg:text-right text-center">
                Payments
              </p>
              <div className="flex space-x-4 items-center my-1 bg-white text-primary p-2 px-5 rounded-lg mt-2">
                <RiVisaLine size={40} />
                <FaCcMastercard size={40} />
                <FaGooglePay size={40} />
                <FaApplePay size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
