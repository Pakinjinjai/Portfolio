import React from "react";
import { Profile } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { CgPhone } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <div
        className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md"
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
        <img
          src={Profile}
          alt="ProfileImage"
          className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125"
        />
      </div>

      <div
        className="w-full flex flex-col "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
        <p className="text-3xl font-bold text-black dark:text-white">
          About Me
        </p>
        <p className="text-lg text-black dark:text-gray-400 leading-10">
          I am enthusiastic and committed to continuous learning and
          self-development in the field of web development. I believe that
          challenges in various aspects of work are valuable experiences that
          contribute to the improvement of my skills. I strive to gain
          real-world experience in projects that present challenges and am ready
          to take responsibility for my role in project development,
          problem-solving, and actively contribute to teamwork. With a creative
          mindset and determination, my goal is to be an integral part of a team
          that conceives and develops efficient solutions for users, emphasizing
          both security and performance. My ultimate goal is to create the best
          possible user experience.
        </p>

        <div
          className="mt-5 2xl:mt-10 flex flex-wrap gap-5"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:scale-125 ease-in-out duration-500">
            <FaUserAlt size={24} />
            Pakin jinjai
          </p>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:scale-125 ease-in-out duration-500">
            <MdEmail size={24} />
            pakin.281244@gmail.com
          </p>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:scale-125 ease-in-out duration-500">
            <CgPhone size={24} />
            ++66 652358039
          </p>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:scale-125 ease-in-out duration-500">
            <FaMapLocationDot size={24} />
            Nakhon si thammarat,TH
          </p>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-white cursor-pointer hover:scale-125 ease-in-out duration-500">
            <FaGithub size={24} />
            github.com/Pakinjinjai
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
