import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Socials = () => {
  return (
    <div>
      <p className="text-center text-primary font-semibold text-3xl my-8">
        Follow us on Social & App Stores:
      </p>
      <div className="flex items-center justify-center space-x-8 my-3">
        <a
          href="https://www.facebook.com/petissier.sg"
          target="blank"
          className="bg-primary p-5 rounded-full text-white hover:scale-110 duration-300"
        >
          <BsFacebook size={50} />
        </a>
        <a
          href="https://www.instagram.com/petissier.sg/"
          target="blank"
          className="bg-primary p-5 rounded-full text-white hover:scale-110 duration-300"
        >
          <BsInstagram size={50} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
