import React from "react";
import { MdOutlinePets } from "react-icons/md";

const MidHero = () => {
  return (
    <div className="midheroBG">
      <div className="max-w-[1240px] mx-auto lg:py-20 p-6 font-poppin">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-primary md:max-w-[450px] max-w-[200px] mx-auto p-4 rounded-xl hover:scale-105 duration-300 relative">
            <MdOutlinePets
              className="absolute lg:bottom-[5%] right-[5%] text-white"
              size={30}
            />
            <h1 className=" lg:text-5xl text-2xl font-bold text-white">
              CAKES & BAKES MADE FROM FRESHEST, NATURAL, PART-ORGANIC
              INGREDIENTS
            </h1>
          </div>
          <div className="space-y-3 text-justify bg-white p-5 rounded-2xl outline outline-primary">
            <p>
              Our hoomans at{" "}
              <span className="font-bold italic underline-offset-4 underline">
                Petissier
              </span>{" "}
              care for your dogs and their wellness. We are dog lovers and
              owners ourselves, and this business started with a mission to
              celebrate dogs everyday, including dogs with food intolerances,
              sensitivities and allergies.
            </p>
            <p>
              We understand that all dogs are unique in their health and
              wellness needs and your dog’s health and food preferences is our
              top priority here.
            </p>
            <p>
              We are better known for our large variety of available cake
              designs customizable according to your dog’s dietary needs. Our
              bakes are 100% natural, with every meat and vegan cake made from
              human-graded ingredients.
            </p>
            <p>
              We also carry dog meals made fresh to your dog’s daily
              requirements, pawfect for those going through a tireless process
              of diet-elimination!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHero;
