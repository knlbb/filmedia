import { Card } from "../components";
import {
  bell,
  drake,
  edsheran,
  image10,
  image12,
  image13,
  justin,
  selena,
  stromzy,
  upload,
} from "../assets";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let artists = [
    {
      id: "1",
      name: "Selena Gomez",
      type: "Singer-Songwriter",
      imgSrc: selena,
    },
    {
      id: "2",
      name: "Justin Beiber",
      type: "Singer-Songwriter",
      imgSrc: justin,
    },
    {
      id: "3",
      name: "Drake",
      type: "Canadian Rapper",
      imgSrc: drake,
    },
    {
      id: "4",
      name: "Ed Sheeran",
      type: "Singer-Songwriter",
      imgSrc: edsheran,
    },
    {
      id: "5",
      name: "Stormzy",
      type: "UK Rapper",
      imgSrc: stromzy,
    },
  ];

  let recommended = [
    {
      id: "1",
      type: "Folk",
      imgSrc: stromzy,
    },
    {
      id: "2",
      type: "Gospel",
      imgSrc: stromzy,
    },
    {
      id: "3",
      type: "Jazz",
      imgSrc: stromzy,
    },
    {
      id: "4",
      type: "Country",
      imgSrc: stromzy,
    },
    {
      id: "4",
      type: "Country",
      imgSrc: stromzy,
    },
  ];

  let pods = [
    {
      id: "1",
      type: "How to be a TopG",
      name: "Andrew Tate",
      imgSrc: image13,
    },
    {
      id: "2",
      type: "Every day lessons of life",
      name: "Sarah jackson",
      imgSrc: image10,
    },
    {
      id: "3",
      type: "Enterpreneur Lessons",
      name: "MoneyBiz",
      imgSrc: image12,
    },
    {
      id: "4",
      type: "Country",
      imgSrc: stromzy,
    },
    {
      id: "5",
      type: "Country",
      imgSrc: stromzy,
    },
  ];

  let card = [
    {
      id: "1",
      name: "Selena Gomez",
      type: "Singer-Songwriter",
      imgSrc: selena,
    },
    {
      id: "2",
      name: "Justin Beiber",
      type: "Singer-Songwriter",
      imgSrc: justin,
    },
  ];

  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(`/profile/${item.name}`, { state: item })
  }

  return (
    <section className="">
      <div className="flex items-center h-16  px-9 py-4 justify-between bg-black w-full">
        <h2 className="font-OpenSans-ExtraBold text-3xl font-extrabold">
          Welcome
        </h2>
        <div className="flex items-center cursor-pointer space-x-4">
          <img src={bell} alt="upload" className="w-6 h-6 object-contain" />
          <img  onClick={() => navigate("/upload")} src={upload} alt="upload" className="w-6 h-6 object-contain" />
          <button
            onClick={() => navigate("/profile")}
            data-collapse-toggle="navbar-default"
            type="button"
            class="m-2 ml-6"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <img
              src="https://media.gq-magazine.co.uk/photos/5df24f43271d0f00080cabf9/3:2/w_1000,h_666,c_limit/20191212-stormzy-02.jpg"
              class="w-10 h-10 border-2 rounded-xl border-white-200 object-cover"
            />
          </button>
        </div>
      </div>
      <div className="mx-6 space-y-9">
        {/** artist */}
        <div className="flex flex-col">
          <span>Artist</span>
          <div className="lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 md:grid-cols-3 w-full items-center  gap-5 grid">
            {artists.slice(0, 5).map((item) => {
              return <Card 
              key={item.id}
               content={item}
               handleClick={() => handleNavigate(item)}
                />;
            })}
          </div>
        </div>
        {/**podcast */}
        <div className="flex flex-col">
          <span>Artist</span>
          <div className="lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 md:grid-cols-3 items-center  gap-5 grid">
            {pods.slice(0, 5).map((item) => {
              return <Card 
              key={item.id}
               content={item}
               handleClick={() => handleNavigate(item)}
                />;
            })}
          </div>
        </div>
        {/**recommendation */}
        <div className="flex flex-col">
          <span>Artist</span>
          <div className="lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 md:grid-cols-3 items-center  gap-5 grid">
            {recommended.slice(0, 5).map((item) => {
              return <Card key={item.id} content={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
