import React from "react";

const MainGoals = () => {
  return (
    <div className="mt-[7.5rem] px-[8.4375rem] h-[100vh] max-h-[100vh]font-hoves ">
      <h4 className="text-5xl uppercase">Main Goals</h4>
      <div className="grid grid-cols-2 grid-flow-col gap-[9rem]">
        <div className="flex items-center space-x-[1.875rem]">
          <p className="text-[12.5rem] font-sf-pro ">1</p>
          <p className="text-2xl">
            Creating comfortable conditions and improving the quality of
            customer service in the industry to raise market standards
          </p>
        </div>
        <div className="flex items-center space-x-[1.875rem]">
          <p className="text-[12.5rem] font-sf-pro ">2</p>
          <p className="text-2xl">
            Constantly improve the quality of services provided by training
            staff, purchasing new equipment and increased advertising
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainGoals;
