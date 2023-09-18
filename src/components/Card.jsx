import React from "react";

const Card = ({ content, handleClick }) => {
  console.log(content.imgSrc);
  return (
    <div onClick={handleClick} className="bg-black cursor-pointer hover:scale-105 transition-all ease-in-out duration-300  text-white  max-w-[260px] max-h-[360px] px-4 py-3.5 rounded-xl">
      <img
        src={content.imgSrc}
        alt=""
        className="w-48 h-48 mx-auto rounded-full object-cover"
      />
      <div className="flex-col flex items-start mt-8 justify-center">
        <h2 className="font-OpenSans-Bold text-sm lg:text-2xl font-bold items-start">{content.name}</h2>
        <h2 className="font-OpenSans-Bold text-xs font-bold items-start text-[#808080]">{content.type}</h2>
      </div>
    </div>
  );
};

export default Card;