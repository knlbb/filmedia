import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cheveron, logo, profile } from "../assets";
import { Links } from "../utils/Links";

const Icon = ({ styles, name, imgurl, isActive, item, handleClick }) => (
  <div className="cursor-pointer " onClick={handleClick}>
    {isActive == item.name && (
      <div className="flex space-x-14  items-center">
        <img
          src={item.active}
          alt={item.name}
          className="h-9 w-9 object-contain"
        />
        <span className="text-white hidden font-bold xl:block text-[17px]">
          {item.name}
        </span>
      </div>
    )}

    {isActive !== item.name && (
      <div className="flex space-x-14 items-center">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="h-9 w-9 object-contain"
        />
        <span className="text-[#808080] hidden xl:block font-bold text-[17px]">
          {item.name}
        </span>
      </div>
    )}
  </div>
);

const Sidebar = () => {
  let currentWin = window.location.href.substring(22);
  let currentTab;
  if (currentWin == "") {
    currentTab = "Home";
  } else if (currentWin == "search") {
    currentTab = "Search";
  } else if (currentWin == "library") {
    currentTab = "Library";
  } else if (currentWin == "playlist") {
    currentTab = "Playlist";
  } else if (currentWin == "upload") {
    currentTab = "Upload";
  } else if (currentWin == "profile") {
    currentTab = "Profile";
  }

  const [active, setActive] = useState(currentTab);
  const navigate = useNavigate();

  return (
    <section className="lg:w-2/12 bg-[#000100] w-full h-screen hidden  mx-auto lg:flex  flex-col p-6">
      <Link
        onClick={() => setActive("Home")}
        to="/"
        className="flex space-x-3 mt-12 items-start"
      >
        <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
        <span className="text-2xl hidden xl:block font-OpenSans-Bold font-bold leading-10">
          FilMedia
        </span>
      </Link>
      {/** Links */}
      <div className="flex flex-col border-gray-600 mt-16 space-y-7">
        {Links.map((link) => (
          <div className="w-full space-y-6">
            <Icon
              key={link.name}
              item={link}
              isActive={active}
              handleClick={() => {
                setActive(link.name);
                navigate(link.route);
              }}
            />
          </div>
        ))}
        <div className="border-b-2 py-6 min-w-full border-gray-600" />
      </div>
      {/** profile */}
      <div
        onClick={() => navigate("/profile")}
        className="w-full cursor-pointer flex space-x-6 items-center mx-auto mt-[30%] "
      >
        <img
          src="https://media.gq-magazine.co.uk/photos/5df24f43271d0f00080cabf9/3:2/w_1000,h_666,c_limit/20191212-stormzy-02.jpg"
          class="w-10 h-10 border-2 rounded-xl border-white-200 object-cover"
        />
        <span className="font-bold hidden xl:block text-sm">Profile</span>
        <img src={cheveron} className="hidden lg:block" alt="" />
      </div>
    </section>
  );
};

export default Sidebar;
