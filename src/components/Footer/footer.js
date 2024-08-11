import React from "react";
import PlayStore from "../../img/play_store.jpg";
import AppStore from "../../img/app_store.jpg";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly items-center h-28 mt-9 bg-[#f0f0f5]">
        <div className="text-3xl w-[450px] font-bold">
          For better experience, download the Foodify app now
        </div>
        <div className="flex">
          <a href="/">
            <img className="w-52 h-16 mx-3" src={PlayStore} alt="play store" />
          </a>
          <a href="/">
            <img
              className="w-48 h-20==16 mx-3"
              src={AppStore}
              alt="app store"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-around p-10 pb-24 bg-[#02060C]">
        <div>
          <h1 className="text-white p-2 text-xl">Foodify</h1>
          <h3 className="text-gray-400 p-2 text-md">©️ 2024</h3>
        </div>
        <div>
          <ul>
            <li className="text-white p-2 text-xl">Company</li>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">About</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Careers</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Team</li>
            </a>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-white p-2 text-xl">Contact us</li>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Help & Suppport</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Partner with us</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Ride with us</li>
            </a>
          </ul>
          <ul>
            <li className="text-white p-2 pt-12 text-xl">Legal</li>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Terms & Conditions</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Cookie Policy</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Privacy Policy</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Investor Relations</li>
            </a>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-white p-2 text-xl">We deliver to:</li>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Bangalore</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Gurgaon</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Delhi</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Mumbai</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Pune</li>
            </a>
            <a href="/">
              <li className="text-gray-400 p-2 text-md">Hyderabad</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
