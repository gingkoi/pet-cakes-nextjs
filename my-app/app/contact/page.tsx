import React from "react";

const Contact = () => {
  return (
    <div className="lg:max-w-[800px] lg:mx-auto font-poppin py-24 px-5">
      <h1 className="text-center text-5xl text-primary font-bold">
        Contact Us
      </h1>
      <form
        action=""
        className="bg-primary p-8 rounded-lg my-5 grid grid-cols-2 gap-3 max-w-[600px] mx-auto"
      >
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 focus:outline-none rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Email"
            className="w-full p-3 focus:outline-none rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-3 focus:outline-none rounded-lg"
          />
        </div>
        <textarea
          id="w3review"
          name="w3review"
          rows={4}
          cols={50}
          placeholder="Enter your message"
          className="col-span-2 p-3 focus:outline-none rounded-lg"
        ></textarea>
        <button className="bg-white text-primary p-3 col-span-2 font-bold hover:bg-primary hover:text-white hover:outline outline-white rounded-lg ease-out duration-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
