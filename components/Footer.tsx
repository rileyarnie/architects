import React from "react";
import Image from "next/image";
import icon from "../public/assets/images/footerIcon.png";
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import LinkedIn from "./icons/LinkedIn";
import Pinterest from "./icons/Pinterest";
import LocationIcon from "./icons/LocationIcon";
import MailIcon from "./icons/MailIcon";
import PhoneIcon from "./icons/PhoneIcon";

const Footer = () => {
  return (
    <footer className="font-hoves bg-arch-gray text-white max-h-[26.0625rem] h-[26.0625rem] pt-[3.625rem]">
      <div className="px-[8.4375rem] grid grid-flow-col ">
        <div className="bg-transparent h-[145px] w-[94px] bg-footer-icon bg-contain bg-no-repeat"></div>
        <div className="space-y-[1.5625rem]">
          <p className="font-semibold">Information</p>
          <ul className="space-y-[1.5625rem]">
            <li>Home</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certificates</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="space-y-[1.5625rem]">
          <p className="font-semibold">Contacts</p>
          <div className="flex align-middle space-x-[1rem] items-center">
            <LocationIcon />
            <p>
              100000, Republic of Kazakhstan,
              <br /> d. Karaganda, str. Television 10
            </p>
          </div>
          <div className="flex align-middle space-x-[1rem] items-center">
            <PhoneIcon />
            <p>+7 (701) 77 76 811</p>
          </div>
          <div className="flex align-middle space-x-[1rem] items-center">
            <MailIcon />
            <p>Galym.sultanov@mail.ru</p>
          </div>
        </div>
        <div className="space-y-[1.5625rem]">
          <p className="font-semibold">Social networks</p>
          <div className="flex space-x-[2.5rem]">
            <Facebook />
            <Twitter />
            <LinkedIn />
            <Pinterest />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
