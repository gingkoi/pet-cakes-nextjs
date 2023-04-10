import React from "react";
import { privacy } from "@/components/TermsAndCondition/input";

const PrivacyPolicy = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto font-poppin py-24 px-8 transition_nav space-y-20 font-light text-sm">
      <div className="space-y-10">
        <h1 className="text-center text-5xl text-primary font-bold">
          Privacy Policy
        </h1>
      </div>
      <div className="my-10 space-y-10 text-lg">
        <div className="space-y-2">
          {privacy.map((item, index) => (
            <p key={index} className="text-justify">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
