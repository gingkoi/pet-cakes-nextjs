"use client";
import Socials from "@/components/Socials";
import { BsWhatsapp, BsTelephoneFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const initialValues: { name: string; email: string; phoneNumber: string } = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors]: any = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: any) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {}, [formErrors]);
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    }
    return errors;
  };
  const notify = () =>
    toast.success("Your message has been received!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  Object.keys(formErrors).length === 0 && isSubmit ? notify() : null;

  return (
    <div className="transition_nav othersBG">
      <div className="lg:max-w-[800px] lg:mx-auto font-poppin pt-24 pb-10 px-5">
        <h1 className="text-center text-5xl text-primary font-bold">
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-primary p-8 rounded-2xl my-5 grid grid-cols-2 gap-3 max-w-[600px] mx-auto"
        >
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className={`w-full p-3 focus:outline-none rounded-lg ${
                formErrors.name && "border-2 border-[#ff5d5c]"
              }`}
              value={formValues.name}
              onChange={handleChange}
            />
            <p className="text-sm text-[#ff5347]">{formErrors.name}</p>
          </div>
          <div className="col-span-1">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className={`w-full p-3 focus:outline-none rounded-lg ${
                formErrors.email && "border-2 border-[#ff5d5c]"
              }`}
            />
            <p className="text-sm text-[#ff5347]">{formErrors.email}</p>
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Phone number"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              className={`w-full p-3 focus:outline-none rounded-lg ${
                formErrors.phoneNumber && "border-2 border-[#ff5d5c]"
              }`}
            />
            <p className="text-sm text-[#ff5347]">{formErrors.phoneNumber}</p>
          </div>
          <textarea
            id="w3review"
            name="w3review"
            rows={4}
            cols={50}
            placeholder="Enter your message"
            className="col-span-2 p-3 focus:outline-none rounded-lg"
          ></textarea>
          <input
            value="Submit"
            type="submit"
            className="bg-white text-primary p-3 col-span-2 font-bold hover:bg-primary hover:text-white hover:outline outline-white rounded-lg ease-out duration-100 cursor-pointer"
          />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            icon={true}
          />
        </form>
        <div className="my-10">
          <p className="text-center text-2xl font-semibold">
            Please click here for assistance ( 9am to 6pm daily )
          </p>
          <div className="my-10 flex justify-center lg:space-x-16 space-x-4">
            <a
              href="https://api.whatsapp.com/send?phone=6596970053"
              target="blank"
              className="flex flex-col justify-center items-center space-y-2 bg-primary py-10 px-5 rounded-xl shadow-xl text-white hover:scale-105 duration-300"
            >
              <BsWhatsapp size={50} className="my-2" />
              <p>(WhatsApp)</p>
              <p className="text-xl font-semibold text-center">Sale 1</p>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6583826684"
              target="blank"
              className="flex flex-col justify-center items-center space-y-2 bg-primary py-10 px-5 rounded-xl shadow-xl text-white hover:scale-105 duration-300"
            >
              <BsWhatsapp size={50} className="my-2" />
              <p>(WhatsApp)</p>
              <p className="text-xl font-semibold text-center">Sale 2</p>
            </a>
          </div>
          <div className="max-w-[400px] mx-auto mb-10">
            <div className="flex justify-center items-center bg-primary text-white py-8 space-x-5 rounded-xl shadow-xl">
              <BsTelephoneFill size={30} />
              <p className="text-xl font-semibold">Office: +65 64404023</p>
            </div>
          </div>
          <Socials />
          <div className="bg-primary/80 h-[1.5px] my-10" />

          <div className="flex flex-col justify-center items-center space-y-5">
            <p className="text-center text-3xl text-primary font-bold">
              Find us here!
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.774407035947!2d103.89936141505967!3d1.310698362064352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1812690dafdf%3A0x16707918cbe472c9!2s253%20Joo%20Chiat%20Rd%2C%20Singapore%20427507!5e0!3m2!1sen!2ssg!4v1681053196943!5m2!1sen!2ssg"
              loading="lazy"
              style={{ marginRight: "0em" }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="lg:h-[450px] w-full h-[300px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
