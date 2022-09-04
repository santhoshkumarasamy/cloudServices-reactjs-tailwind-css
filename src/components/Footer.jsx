import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-24 bg-slate-900 text-gray-300 py-3 px-2">
      <div className=' max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div className="">
          <h6 className="uppercase font-bold pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>

        <div className="">
          <h6 className="uppercase font-bold pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">API Status</li>
          </ul>
        </div>

        <div className="">
          <h6 className="uppercase font-bold pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">BLogs</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>

        <div className="">
          <h6 className="uppercase font-bold pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Condition</li>
          </ul>
        </div>

        <div className=' col-span-2 pt-8 md:pt-2'>
            <p className="uppercase font-bold">Subscribe to newsletter</p>
            <p className="my-2">The latest news, articles and resources, sent to your inbox weekly.</p>
            <form className='flex flex-col md:flex-row' action="">
            <input className=' w-full rounded-md p-2 mr-4 mb-4' type="email" placeholder="Enter Your Email" /> <button  className=' p-2 mb-4'>Subscribe</button>
            </form>
        </div>

      </div>

      <div className='flex justify-between px-1 py-2 items-center max-w-[1240px] mx-auto flex-col md:flex-row text-center text-gray-500'>
        <p className="py-1">2022 Cloud Services, LLC. All rights reserved</p>
        <div className=' flex gap-4 pt-2 px-4 justify-between text-2xl w-full md:w-[300px]' >
            <FaFacebook />
            <FaGithub />
            <FaInstagram />
            <FaTwitch />
            <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
