import React from "react";

const CollectionAndDelivery = () => {
  return (
    <div className="lg:max-w-[800px] lg:mx-auto font-poppin py-24 px-8 transition_nav space-y-20">
      <div className="space-y-10">
        <h1 className="text-center text-5xl text-primary font-bold">
          Collection & Delivery
        </h1>
        <div className="text-lg text-center bg-primary p-3 font-bold text-white space-y-3 rounded-xl shadow-md">
          <p>Terms & conditions for Petissier.sg are detailed below.</p>
          <p>
            By making payment, it will be deemed that the terms are understood
            and accepted as applying to your order.{" "}
          </p>
        </div>
      </div>
      <div className="my-10 space-y-10 text-lg">
        <h2 className="text-center text-4xl text-primary font-bold">
          Self collection{" "}
        </h2>
        <ol className="space-y-2 list-decimal">
          <li>
            Please Whatapps{" "}
            <a
              href="https://api.whatsapp.com/send?phone=6596970053"
              target="blank"
              className="text-primary font-bold underline"
            >
              sales 1
            </a>{" "}
            or{" "}
            <a
              href="https://api.whatsapp.com/send?phone=6583826684"
              target="blank"
              className="font-bold text-primary underline"
            >
              sales 2
            </a>{" "}
            to confirmed pickup timing and date from shop.
            <br />
            <b>( 253 JOO CHIAT ROAD, S427507 )</b>
          </li>
          <li>
            Please provide the content of order – Items and reference order
            number .
          </li>
          <li>
            We will prepare the order in advance . Please order aleast 2 days
            advance .
          </li>
          <li>Last Pickup Time will be 6 pm daily</li>
          <p className="text-center bg-primary p-3 text-white rounded-lg font-bold">
            If there is further info or clarification, our sales will contact
            you
          </p>
        </ol>
      </div>
      <div className="space-y-10">
        <h3 className="text-center text-4xl text-primary font-bold">
          Standard Delivery Service <br />( Lead time 2 days advance )
        </h3>
        <ul className="list-disc text-lg">
          <li>
            Petissier.sg provide a nominal fee of $15 Islandwide delivery
            services.
          </li>
          <li>
            All orders must at least be 2 days advance lead time . We do not
            accept rush order during this time.
          </li>
          <li>
            Order atleast 24-48 hours before your preferred date and time.
          </li>
          <li>
            Our delivery standard time slot will be : Delivery (10am-4pm, no
            fixed slots)
          </li>
          <li>
            Standard delivery to Residential address only @ $15/per location
          </li>
          <li>
            Standard delivery to special locations (malls, restaurants, hotels,
            offshore islands, etc) @ $20
          </li>
        </ul>
      </div>
      <div className="my-10 space-y-10">
        <h4 className="text-center text-4xl text-primary font-bold">
          Eve / day of Public Holiday Delivery
          <br />( Lead time 2 days advance )
        </h4>
        <ul className="list-disc text-lg">
          <li>
            Holiday delivery to Residential address only @ $20/per location
          </li>
          <li>
            Holiday delivery to special locations (malls, restaurants, hotels,
            offshore islands, etc) @ $25
          </li>
          <li>
            All orders must at least be 2 days advance lead time . We do not
            accept rush order during this time .
          </li>
          <li>For our delivery standard time slot 10am to 4pm </li>
        </ul>
      </div>
    </div>
  );
};

export default CollectionAndDelivery;
