import React from "react";
import {
  pricing,
  expiry,
  alterations,
  delivery,
  force,
  storage,
  complains,
} from "../../components/TermsAndCondition/input";

const TermsAndCondition = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto font-poppin py-24 px-8 transition_nav space-y-20 font-light text-sm">
      <div className="space-y-10">
        <h1 className="text-center text-5xl text-primary font-bold">
          Terms and Conditions
        </h1>
        <div className="text-lg text-center bg-primary p-3 font-bold text-white space-y-3 rounded-xl shadow-md">
          <p>Terms & conditions for Petissier.sg are detailed below.</p>
          <p>
            By making payment, it will be deemed that the terms are understood
            and accepted as applying to your order.
          </p>
        </div>
      </div>
      <div className="my-10 space-y-10 text-lg">
        <h2 className="text-center text-4xl text-primary font-bold">
          Payment Conditions
        </h2>
        <div>
          <h3 className="text-center lg:text-left text-2xl text-primary font-bold my-3">
            Pricing:
          </h3>
          <ol className="space-y-2 list-disc">
            {pricing.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-center lg:text-left text-2xl text-primary font-bold my-3">
            Expiry of purchase:
          </h3>
          <div className="space-y-2">
            {expiry.map((item, index) => (
              <p key={index} className="text-justify">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-center lg:text-left text-2xl text-primary font-bold my-3">
            Alterations & Changes:
          </h3>
          <ol className="space-y-2 list-disc">
            {alterations.map((item, index) => (
              <li key={index} className="text-justify">
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-center lg:text-left text-2xl text-primary font-bold my-3">
            Delivery Conditions:
          </h3>
          <ol className="space-y-2 list-disc">
            {delivery.map((item, index) => (
              <li key={index} className="text-justify">
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-center lg:text-left text-2xl text-primary font-bold my-3">
            Force Majeure:
          </h3>
          <div className="space-y-2">
            {force.map((item, index) => (
              <p key={index} className="text-justify">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-center lg:text-left text-2xl text-primary font-bold my-3">
            Storage & Consumption:
          </h3>
          <ol className="space-y-2 list-disc">
            {storage.map((item, index) => (
              <li key={index} className="text-justify">
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="text-center lg:text-left text-2xl text-primary font-bold my-3">
            Complaints / Suggestions:
          </h3>
          <ol className="space-y-2 list-disc">
            {complains.map((item, index) => (
              <li key={index} className="text-justify">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
