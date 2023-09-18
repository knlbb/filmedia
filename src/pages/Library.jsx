import React from "react";
import { useNavigate } from "react-router-dom";
import { bell, upload } from "../assets";

const Library = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen">
      <div className="flex items-center h-16 px-9 py-4 justify-between bg-black w-full">
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
      <div class="p-5">
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li class="mr-2" role="presentation">
            <button
              id="show-playlists"
              type="button"
              role="tab"
              aria-controls="playlists-content"
              aria-selected="false"
              class="inline-block p-4 bg-gray-100 rounded-lg active dark:bg-gray-800 dark:text-blue-500"
            >
              Playlists
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              id="show-artists"
              type="button"
              role="tab"
              aria-controls="artists-content"
              aria-selected="false"
              class="inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Artists
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              id="show-podcasts"
              type="button"
              role="tab"
              aria-controls="podcasts-content"
              aria-selected="false"
              class="inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Podcasts
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              id="show-albums"
              type="button"
              role="tab"
              aria-controls="albums-content"
              aria-selected="false"
              class="inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Albums
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              id="show-assets"
              type="button"
              role="tab"
              aria-controls="assets-content"
              aria-selected="false"
              class="inline-block p-4 rounded-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Assets
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContentExample">
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="playlists-content"
          role="tabpanel"
          aria-labelledby="show-playlists"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Profile tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="artists-content"
          role="tabpanel"
          aria-labelledby="show-artists"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="podcasts-content"
          role="tabpanel"
          aria-labelledby="show-podcasts"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="albums-content"
          role="tabpanel"
          aria-labelledby="show-albums"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong class="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Library;
