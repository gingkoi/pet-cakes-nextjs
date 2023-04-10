"use client";
import React, { useState } from "react";
import {
  general,
  tabs,
  ordering,
  cakes,
  allergies,
  payment,
} from "../../components/FAQ/input";

const FAQ = () => {
  const [click, setClick] = useState(-1);
  const [tab, setTab] = useState(0);
  const handleTab = (index: number) => {
    setTab(index);
  };
  const handleClick = (index: number) => {
    setClick(index);
  };
  return (
    <div className="lg:max-w-[1500px] lg:mx-auto font-poppin pt-24 pb-10 px-5 transition_nav">
      <h1 className="text-center text-5xl text-[#eb5b3d] font-bold">
        Frequently asked questions
      </h1>
      <div
        className={`grid lg:grid-cols-5 items-center my-16 uppercase text-lg gap-3`}
      >
        {tabs.map((item, index) => (
          <div
            key={index}
            className={`text-center cursor-pointer font-semibold rounded-lg py-3 hover:scale-105 duration-300 ${
              tab === index
                ? "bg-[#eb5b3d] text-white"
                : "text-white bg-primary"
            }`}
            onClick={() => handleTab(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={`my-10 ${tab == 0 ? "block" : "hidden"}`}>
        {general.map((item, index) => (
          <ul
            className={`border-b-2 border-gray-200 p-5`}
            onClick={() => handleClick(index)}
            key={index}
          >
            <p
              className={`cursor-pointer text-2xl font-semibold py-3 hover:text-[#eb5b3d] duration-300 ${
                click === index ? "text-[#eb5b3d]" : "text-primary"
              }`}
            >
              {item.question}
            </p>
            {click === index && (
              <li className="border-t-2 border-gray-200 py-10 text-lg transition_nav">
                {item.answer.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </li>
            )}
          </ul>
        ))}
      </div>
      <div className={`my-10 ${tab == 1 ? "block" : "hidden"}`}>
        {ordering.map((item, index) => (
          <ul
            className={`border-b-2 border-gray-200 p-5`}
            onClick={() => handleClick(index)}
            key={index}
          >
            <p
              className={`cursor-pointer text-2xl font-semibold py-3 hover:text-[#eb5b3d] duration-300 ${
                click === index ? "text-[#eb5b3d]" : "text-primary"
              }`}
            >
              {item.question}
            </p>
            {click === index && (
              <li className="border-t-2 border-gray-200 py-10 text-lg transition_nav">
                {item.answer.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </li>
            )}
          </ul>
        ))}
      </div>
      <div className={`my-10 ${tab == 2 ? "block" : "hidden"}`}>
        {cakes.map((item, index) => (
          <ul
            className={`border-b-2 border-gray-200 p-5`}
            onClick={() => handleClick(index)}
            key={index}
          >
            <p
              className={`cursor-pointer text-2xl font-semibold py-3 hover:text-[#eb5b3d] duration-300 ${
                click === index ? "text-[#eb5b3d]" : "text-primary"
              }`}
            >
              {item.question}
            </p>
            {click === index && (
              <li className="border-t-2 border-gray-200 py-10 text-lg transition_nav">
                {item.answer.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </li>
            )}
          </ul>
        ))}
      </div>
      <div className={`my-10 ${tab == 3 ? "block" : "hidden"}`}>
        {allergies.map((item, index) => (
          <ul
            className={`border-b-2 border-gray-200 p-5`}
            onClick={() => handleClick(index)}
            key={index}
          >
            <p
              className={`cursor-pointer text-2xl font-semibold py-3 hover:text-[#eb5b3d] duration-300 ${
                click === index ? "text-[#eb5b3d]" : "text-primary"
              }`}
            >
              {item.question}
            </p>
            {click === index && (
              <li className="border-t-2 border-gray-200 py-10 text-lg transition_nav">
                {item.answer.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </li>
            )}
          </ul>
        ))}
      </div>
      <div className={`my-10 ${tab == 4 ? "block" : "hidden"}`}>
        {payment.map((item, index) => (
          <ul
            className={`border-b-2 border-gray-200 p-5`}
            onClick={() => handleClick(index)}
            key={index}
          >
            <p
              className={`cursor-pointer text-2xl font-semibold py-3 hover:text-[#eb5b3d] duration-300 ${
                click === index ? "text-[#eb5b3d]" : "text-primary"
              }`}
            >
              {item.question}
            </p>
            {click === index && (
              <li className="border-t-2 border-gray-200 py-10 text-lg transition_nav">
                {item.answer.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
