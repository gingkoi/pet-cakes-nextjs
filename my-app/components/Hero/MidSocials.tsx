import React from "react";
import photos from "./socials";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";

const MidSocials = () => {
  return (
    <div className="font-poppin bg-primary py-8 border-b-8 border-white">
      <div className="bg-white text-primary flex justify-center items-center py-5">
        <p className="text-2xl text-center lg:text-4xl font-bold uppercase">
          Follow our Instagram{" "}
          <a
            href="https://www.instagram.com/petissier.sg/"
            className="hover:text-black duration-300"
          >
            @petissier.sg
          </a>
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto lg:py-6 p-6">
        <div className="grid lg:grid-cols-3 lg:gap-5 gap-6">
          {photos.map((item, index) => (
            <a
              href={item.link}
              target="blank"
              className="w-full h-[350px] rounded-2xl duration-300 cursor-pointer relative group"
              key={index}
            >
              <div className="absolute z-[50] top-0 right-0 left-0 bottom-0 rounded-2xl group-hover:bg-black/70 duration-300 group-hover:text-white flex justify-center items-center p-5 text-transparent group-hover:border-4 group-hover:border-white">
                <div className="flex flex-col items-center space-y-3">
                  <p className="text-center font-semibold">
                    {item.description}
                  </p>
                  <AiFillInstagram size={40} />
                </div>
              </div>
              <Image
                src={item.href}
                alt="/"
                fill
                className="rounded-2xl border-4 border-white"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidSocials;
