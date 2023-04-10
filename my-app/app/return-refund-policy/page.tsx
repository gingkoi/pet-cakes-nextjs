import React from "react";
import {
  pricing,
  alterations,
  storage,
  complains,
} from "../../components/TermsAndCondition/input";

const ReturnRefundPolicy = () => {
  return (
    <div className="lg:max-w-[1200px] lg:mx-auto font-poppin py-24 px-8 transition_nav space-y-20 font-light text-sm">
      <div className="space-y-10">
        <h1 className="text-center text-5xl text-primary font-bold">
          Return & Refund Policy
        </h1>
      </div>
      <div className="my-10 space-y-10 text-lg">
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

export default ReturnRefundPolicy;
