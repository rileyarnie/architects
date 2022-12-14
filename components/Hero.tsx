import React from "react";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";

const Hero = () => {
  return (
    <div className="px-[8.4375rem] mt-[6.375rem] h-[calc(100vh-6.375rem)] max-h-[calc(100vh-6.375rem)] grid grid-cols-3  font-hoves uppercase">
      <div className="flex flex-col  my-auto space-y-[5.625rem]">
        <h3 className="text-[4rem] leading-[4rem]">
          Project <br />
          <span className="text-text-secondary font-semibold">Nurtown</span>
        </h3>
        <div className="flex space-x-[1.875rem]">
          <div className="border-[1px] border-[#F2F2F2] bg-[#F9F9F9] h-[3.375rem] w-[3.375rem] grid place-items-center cursor-pointer">
            <ArrowLeft />
          </div>
          <div className="border-[1px] border-gray-200 bg-gray-300 h-[3.375rem] w-[3.375rem] grid place-items-center cursor-pointer">
            <ArrowRight />
          </div>
        </div>
        <div className="flex text-2xl space-x-[1.625rem]">
          <p>01</p>
          <p>/</p>
          <p>02</p>
        </div>
      </div>
      <div className=" col-span-2  bg-first-hero bg-center bg-cover bg-no-repeat">
        <div className="h-[4.4375rem] w-[13.875rem] bg-white bottom-0 absolute grid place-items-center text-text-secondary hover:cursor-pointer hover:bg-text-secondary hover:text-text-primary duration-300 origin-left">
          <div className="flex space-x-3">
            <h4>View Project </h4>
            <ArrowRight invert />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
