import React from "react";
import Image from "next/image";

const MidArticles = () => {
  return (
    <div className="font-poppin midheroBG">
      <div className="bg-primary text-white flex justify-center items-center py-8">
        <p className="text-2xl text-center lg:text-4xl font-bold uppercase">
          We're also featured in articles!
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto flex justify-center py-10">
        <a
          href="https://blog.petloverscentre.com/dog-cake-singapore/"
          target="blank"
        >
          <Image
            src={"/article/petLoverCentre.png"}
            alt=""
            width={300}
            height={300}
            className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] bg-white p-5 rounded-2xl hover:scale-105 duration-300 outline outline-primary"
          />
        </a>
      </div>
    </div>
  );
};

export default MidArticles;
