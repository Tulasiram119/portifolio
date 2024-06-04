import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple"> your </span>digital
          presence to next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out out to me today and lets&apos; discuss how i can help you to
          achieve your goals
        </p>
        <a href="mailto:tulasiramkancharla119@gmail.com">
          <MagicButton
            title="Lets get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Tulasiram
        </p>
        <div className="flex items-center gap-3 md:gap-6 ">
          {socialMedia.map((media) => (
            <div
              key={media.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={media.img} alt={media.img} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
