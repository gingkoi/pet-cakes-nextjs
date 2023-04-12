import React from "react";
import product from "./product";
import Image from "next/image";

const MidProducts = () => {
  return (
    <div className="font-poppin midheroBG">
      <div className="bg-primary text-white flex justify-center items-center py-8">
        <p className="text-2xl text-center lg:text-4xl font-bold uppercase">
          Our Pet Cakes & Pupcakes
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto lg:py-24 p-6">
        <div className="grid lg:grid-cols-3 lg:gap-16 gap-6">
          {product.map((item, index) => (
            <div className="flex flex-col items-center space-y-3 group">
              <a
                href={"/"}
                target="blank"
                className="relative w-full h-[470px] rounded-2xl overflow-hidden border-4 border-primary"
                key={index}
              >
                <Image
                  src={item.href}
                  alt="/"
                  fill
                  className="rounded-2xl hover:scale-105 duration-300"
                />
              </a>
              <a
                href="/"
                target="blank"
                className="bg-primary text-white p-5 font-bold text-xl rounded-2xl"
              >
                {item.description}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidProducts;
