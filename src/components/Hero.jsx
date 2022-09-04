import React from "react";

import { RiDatabase2Fill } from "react-icons/ri";
import { HiServer } from "react-icons/hi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";

import bgImage from "../assets/cyber-bg.png";
const Hero = () => {
  return (
    <header name="home" className="w-full h-fit md:h-screen bg-zinc-200 flex flex-col justify-between pt-20 md:pt-0 ">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand</p>
          <button className="py-3 px-3 text-1xl my-4 sm:w-[60%]">
            Get Started
          </button>
        </div>
        <div>
          <img className="w-full" src={bgImage} alt="" />
        </div>
        <div className="absolute flex flex-col py-8 bottom-[5%] md:min-w-[760px] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl ">
          <p className=" text-center text-2xl pb-1 ">Data Services</p>
          <div className=" flex justify-between flex-wrap px-4 ">
            <p className=" flex px-4 py-2 text-slate-700">
              <FaCloudUploadAlt className=" h-6 text-indigo-600 text-2xl mr-1" /> App
              Security
            </p>
            <p className=" flex px-4 py-2 text-slate-700">
              <RiDatabase2Fill className=" h-6 text-indigo-600 text-2xl" />
              Dashboard Design
            </p>
            <p className=" flex px-4 py-2 text-slate-700">
              <HiServer className=" h-6 text-indigo-600 text-2xl" /> Cloud Data
            </p>
            <p className=" flex px-4 py-2 text-slate-700">
              <HiPaperAirplane className=" h-6 text-indigo-600 text-2xl" /> Api
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
