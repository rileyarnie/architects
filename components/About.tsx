import React from "react";
import ArrowRight from "./icons/ArrowRight";

const About = () => {
  return (
    <div className="mt-[7.5rem] px-[8.4375rem] h-[100vh] max-h-[100vh] grid grid-cols-3  font-hoves ">
      <div className="h-[27.1875rem] max-h-[27.1875rem] bg-[#FBFBFB] col-span-3 px-[5.3125rem] pt-[1.875rem] grid grid-cols-3">
        <div className="col-span-2 grid grid-flow-col grid-cols-2">
          <div className="h-[16.5625rem] w-[16.875rem] col-start-1 bg-first-company bg-no-repeat "></div>
          <div className="h-[21.5625rem] w-[16.875rem] mt-[1.875rem] bg-second-company bg-no-repeat"></div>
          <div className="h-[8.75rem] w-[16.875rem] col-start-1 mt-[-1.875rem] bg-third-company bg-no-repeat"></div>
        </div>
        <div className="space-y-5">
          <h4 className="text-5xl uppercase">Companies</h4>
          <p className="text-text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="bg-white py-4 px-8 h-[4.4375rem] w-[13.875rem] grid place-items-center text-text-secondary hover:cursor-pointer hover:bg-text-secondary hover:text-text-primary duration-300 origin-left">
            <div className="flex space-x-3">
              <h4>Read More</h4>
              <ArrowRight invert />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
