import Image from "next/image";
import React from "react";
import icon from "../public/icon.png";

const Navbar = () => {
  return (
    <nav className="max-h-[6.375rem] h-[6.375rem] fixed top-0 w-full z-10 px-[8.4375rem] py-[2rem] grid grid-flow-col grid-cols-3 text-text-secondary font-hoves uppercase bg-[#E5E5E5]">
      <Image
        src={icon}
        height={44}
        width={70}
        alt="logo"
        className="object-contain"
      />
      <ul className="col-span-2 flex space-x-[3.75rem]">
        <li>Home</li>
        <li>Gallery</li>
        <li>Projects</li>
        <li>Certificates</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
};

export default Navbar;
