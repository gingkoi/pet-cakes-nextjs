import React from "react";
import product from "../../components/Hero/product";
import Image from "next/image";

const Products = () => {
  return (
    <div className="font-poppin midheroBG transition_nav">
      <div className="max-w-[1280px] mx-auto lg:py-10 p-6">
        <div>
          <h1 className="text-2xl text-center lg:text-5xl font-bold uppercase font-oleo my-5">
            Our Products
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-16 gap-6 bg-primary p-12 rounded-2xl">
          {product.map((item, index) => (
            <div className="flex flex-col items-center space-y-3 group">
              <a
                href={item.link}
                className="relative w-full h-[470px] rounded-2xl overflow-hidden border-4 border-white"
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
                href={item.link}
                className="bg-white text-primary p-5 font-bold text-xl rounded-2xl group-hover:scale-105 duration-300"
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

export default Products;
