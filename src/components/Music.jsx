import React from "react";
import { useStateContext } from "../context";


const Music = () => {
  const { setOpenPlayer, openPlayer } = useStateContext();
  const handleClick = () => {
    if (!openPlayer) {
      setOpenPlayer(true);
    }else{
      setOpenPlayer(false);
    }
  };
  return (
    <div>
      <div className="flex mx-auto cursor-pointer flex-col my-[25%] lg:mt-0">
        <h2 className="text-2xl font-bold text-[#fafafa">Songs</h2>
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden rounded-lg">
              <table className="min-w-[90%] ">
                <thead className="bg-transparent  border-b-2 ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-sm font-bold text-left text-gray-500 uppercase "
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-sm font-bold text-left text-gray-500 uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-sm font-bold text-right text-gray-500 uppercase "
                    >
                      Featured Artist
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-sm font-bold text-right text-gray-500 uppercase "
                    >
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr >
                    <td
                      onClick={() => handleClick()}
                      className="px-6 py-4 text-sm font-bold text-[#fafafa] hover:text-red-500 whitespace-nowrap"
                    >
                      1
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-[#fafafa] whitespace-nowrap">
                      Glory
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                      <a className="text-sm font-bold text-[#fafafa" href="#">
                        Feat ladySmith
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-lg font-bold text-[#fafafa" href="#">
                        3:45
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
