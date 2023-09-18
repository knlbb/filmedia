import React from 'react'

import { useStateContext } from "../context";

const PlayerSection = () => {

  const { setPip, openPip } = useStateContext();
  const { setBigScreen, openBigScreen } = useStateContext();

  const handleClick = () => {
    if (!openPip) {
      setPip(true);
    }else{
      if (openBigScreen){
        console.log("AHDFHDH");
        setBigScreen(false);
        setPip(true);
      }else{
        setPip(false);
      }
    }
  };
  
  return ( 
    <div className="grid grid-cols-12 w-screen max-w-screen fixed p-2 bottom-0 opacity-90 flex h-1/8 text-white items-center justify-center gap-2 bg-[#000000] ">
      
      <div class="col-span-2">
        <div class="flex rounded rounded-xl ml-5">
          <img class="h-1/4 w-1/4" src="https://i.guim.co.uk/img/media/c92c29b0aaa5f594b2539d5820c81eee34f81ee8/0_123_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=234ad294f3b6254424320e56dcdb6505" alt="" />
          <div class="m-2 w-full">
            <h1 class="font-bold">Glory</h1>
            <h1 class="text-xs text-gray-500">Burna Boy  (feat. Ladysmith Black Mambazo)</h1>
          </div>
        </div>
      </div>


      <div class="col-span-8 p-4">
        <div class="flex items-center justify-center">
            <h1 class="text-xs">From the Album: <b>Love, Damini</b></h1>
        </div>
        <div class="ml-10 mt-2 grid grid-cols-9 flex items-center justify-center">
            <span class="col-span-1 text-right text-xs mr-2">0:00</span>
              <div class="col-span-7 pt-2">
                  <div class="bg-gray-100 w-full rounded overflow-hidden h-1 mb-1.5">
                      <div class="bg-gray-500 p-1 rounded-sm w-1/3"></div>
                  </div>
              </div>
            <span class="col-span-1 text-xs  ml-2">3:15</span>
        </div>
        <div class="flex items-center justify-center gap-5 mt-2">
            <button>Shuffle</button>
            <button>Playlist</button>
            <button>Back</button>
            <button>Play</button>
            <button>Next</button>
            <button onClick={() => handleClick()}>P-i-P</button>
            <button>Repeat</button>
        </div>
      </div>

      <div class="col-span-2 flex items-center justify-center gap-2">
        <button>Volume</button>
        <button>Heart</button>
        <button>Money</button>
        <button>...</button>
      </div>
    </div>
  )
}

export default PlayerSection