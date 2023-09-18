import React from 'react'
import upLogo from '../assets/uploadIcon.png'
import pod1 from '../assets/rock.png'
import { useNavigate } from "react-router-dom";
import pod2 from '../assets/chill.png'

const Search = () => {
  let genre = [
    {
      id: '1',
      type: 'Folk',
      imgSrc: '1356'
    },
    {
      id: '2',
      type: 'Gospel',
      imgSrc: '1356'
    },
    {
      id: '3',
      type: 'Jazz',
      imgSrc: '1356'
    },
    {
      id: '4',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '5',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '6',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '7',
      type: 'Jazz',
      imgSrc: '1356'
    },
    {
      id: '8',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '9',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '10',
      type: 'Country',
      imgSrc: '1356'
    },
  
  ];

  let pods = [
    {
      id: '1',
      type: 'Folk',
      imgSrc: '1356'
    },
    {
      id: '2',
      type: 'Gospel',
      imgSrc: '1356'
    },
    {
      id: '3',
      type: 'Jazz',
      imgSrc: '1356'
    },
    {
      id: '4',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '5',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '6',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '7',
      type: 'Jazz',
      imgSrc: '1356'
    },
    {
      id: '8',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '9',
      type: 'Country',
      imgSrc: '1356'
    },
    {
      id: '10',
      type: 'Country',
      imgSrc: '1356'
    },
  
  ];

  const navigate = useNavigate();


  return (
    <section>
      <div class="h-full absolute overflow-auto">
          <nav class="bg-black border-black-200 px-2 flex h-20 sm:px-4 py-2.5 dark:bg-black-900 sticky top-0 z-50">
            <div class="container flex flex-wrap items-center justify-between">
              <a class="flex w-fit items-center">
                <div class="w-96 relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>                  
                  </div>
                  <input type="text" id="input-group-1" class="bg-white-50  focus:outline-none border border-white-300 text-gray-900 text-2xl rounded-lg block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray" placeholder="Search..."/>
                </div>
              </a>
              <div class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" >
                <button data-collapse-toggle="navbar-default" type="button" class="m-2" aria-controls="navbar-default" aria-expanded="false">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="mx-auto text-white w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                  </svg> 
                </button>

                <button  onClick={() => navigate("/upload")} data-collapse-toggle="navbar-default" type="button" class="m-2 ml-6" aria-controls="navbar-default" aria-expanded="false">
                  <img src={upLogo} className="w-7"/>
                </button>

                <button onClick={() => navigate("/profile")} data-collapse-toggle="navbar-default" type="button" class="m-2 ml-6" aria-controls="navbar-default" aria-expanded="false">
                  <img src="https://media.gq-magazine.co.uk/photos/5df24f43271d0f00080cabf9/3:2/w_1000,h_666,c_limit/20191212-stormzy-02.jpg" class="w-10 h-10 border-2 rounded-xl border-white-200 object-cover"/>
                </button>
              </div>
            </div>
          </nav>
          
          <div class="p-5">
            <h1 class="text-sm font-bold p-5">
              GENRES
            </h1>
            <div>            
              <div class="flex grid grid-cols-5 gap-5">
                {genre.map(
                  d => (
                    <a href="#" key={d.id} class="block h-auto bg-white rounded-lg shadow ">
                        {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.type}</h5> */}
                        <img src={pod2}/>
                    </a>
                  )
                )}
              </div>
            </div>

            <h1 class="text-sm font-bold p-5">
              PODCASTS
            </h1>
            <div>            
              <div class="flex grid grid-cols-5 gap-5">
                {pods.map(
                  d => (
                    <a href="#" key={d.id} class="block h-auto bg-white rounded-lg ">
                        {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.type}</h5> */}
                        <img src={pod1}/>
                    </a>
                  )
                )}
              </div>
            </div>           
          </div>
        </div>
    </section>
  )
}

export default Search