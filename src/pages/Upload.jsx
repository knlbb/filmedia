import React from 'react'

const Upload = () => {
  return (
    <section className='flex flex-col items-center w-full'>
        <div class="grid grid-cols-2  p-5 gap-5 flex">
            <div class="items-start">
                <button class="bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded">
                    Album
                </button>
                <button class="bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded">
                    Track
                </button>
                <button class="bg-transparent mr-5 hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded">
                    Podcast
                </button>
            </div>
        </div>
        <div class="flex justify-center w-3/4">
            <div class="p-5 w-full m-5 mt-0 border rounded-lg">
                <label
                    class="flex justify-center w-full h-48 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    <span class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span class="font-medium text-gray-600">
                            Drop files to Attach, or 
                            <span class="text-blue-600"> browse to upload</span>
                        </span>
                    </span>
                    <input type="file" name="file_upload" class="hidden"/>
                </label>
            </div>
        </div>

        <div class="flex justify-center w-3/4 overflow-auto">
            <div class="p-5 w-full m-5 mt-0 border rounded-lg">
                <h1>Title</h1>
                <input type="text" id="input-group-1" class="bg-white-50 w-full mt-5 focus:outline-none border border-white-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray" placeholder="Search..."/>

                <h1 class="mt-5">Description</h1>
                <input type="text" id="input-group-1" class="bg-white-50 w-full mt-5 focus:outline-none border border-white-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray" placeholder="Search..."/>
                
                <h1 class="mt-5">Cover Art</h1>
                <label
                    class="flex mt-5 justify-center w-full h-24 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    <span class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span class="font-medium text-gray-600">
                            Drop files to Attach, or 
                            <span class="text-blue-600"> browse to upload</span>
                        </span>
                    </span>
                    <input type="file" name="file_upload" class="hidden"/>
                </label>
                <div class="grid grid-cols-2 gap-5">
                    <div>
                        <h1 class="mt-5">Genre</h1>
                        <select id="countries" class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Genre</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <h1 class="mt-5">Tags</h1>
                        <select id="countries" class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select up to 3 Tags</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex m-5 justify-left w-3/4 overflow-auto">
            <input id="checked-checkbox" type="checkbox" value="" class="w-8 h-8 rounded"/>
            <label for="checked-checkbox" class="ml-5 text-xl font-medium text-white-900 dark:text-gray-300">Mint as an NFT</label>
        </div>

        <div class="flex justify-center w-3/4 overflow-auto">
            <div class="p-5 w-full m-5 mt-0 border rounded-lg">
                <div class="grid grid-cols-2 gap-5">
                    <div>
                        <h1 class="mt-5">Price</h1>
                        <h1 class="mt-5 text-xs">Set a fixed price for your asset</h1>
                        <select id="countries" class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Price or input manually</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <h1 class="mt-5">Supply</h1>
                        <h1 class="mt-5 text-xs">The number of items that can be minted. No GAS Fees for you :)</h1>
                        <select id="countries" class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select the amount to generate</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex m-5 justify-left w-3/4 overflow-auto">
            <label for="checked-checkbox" class="ml-5 text-xl font-medium text-white-900 dark:text-gray-300">Re-Sale Royalties</label>
        </div>

        <div class="flex justify-center w-3/4 overflow-auto">
            <div class="p-5 w-full m-5 mt-0 border rounded-lg">
                <div class="grid grid-cols-3 gap-5">
                    <div>
                        <h1 class="mt-5">Filmedia</h1>
                        <input type="text" id="input-group-1" disabled class="font-bold text-center bg-white-50 w-full mt-5 focus:outline-none border border-white-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray" placeholder="2%"/>

                    </div>
                    <div>
                        <h1 class="mt-5">Creator</h1>
                        <input type="text" id="input-group-1" disabled class="font-bold text-center bg-white-50 w-full mt-5 focus:outline-none border border-white-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray" placeholder="49%"/>

                    </div>
                    <div>
                        <h1 class="mt-5">NFT Owner</h1>
                        <input type="text" id="input-group-1" disabled class="font-bold text-center bg-white-50 w-full mt-5 focus:outline-none border border-white-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray" placeholder="49%"/>

                    </div>
                </div>
            </div>
        </div>

        <div class="flex m-5 justify-left w-3/4 overflow-auto">
            <label for="checked-checkbox" class="ml-5 text-xl font-medium text-white-900 dark:text-gray-300">Sale Royalties</label>
        </div>

        <div class="flex justify-center w-3/4 overflow-auto">
            <div class="p-5 w-full m-5 mt-0 border rounded-lg">
                <div class="grid grid-cols-2 gap-5">
                    <div>
                        <h1 class="mt-5">Filmedia</h1>
                        <input type="text" id="input-group-1" disabled class="font-bold text-center bg-white-50 w-full mt-5 focus:outline-none border border-white-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray" placeholder="1%"/>

                    </div>
                    <div>
                        <h1 class="mt-5">Creator</h1>
                        <input type="text" id="input-group-1" disabled class="font-bold text-center bg-white-50 w-full mt-5 focus:outline-none border border-white-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray" placeholder="99%"/>

                    </div>
                </div>
            </div>
        </div>

        <div class="flex m-5 justify-center w-3/4 overflow-auto">
            <label for="checked-checkbox" class="ml-5 text-xs w-1/2 text-gray-500 dark:text-gray-300">By Uploading this file, you acknowledge that the transaction is final and cannot be reversed. 
            Includes <a href="#" class="text-white">royalty split agreement</a>. Read and understand 
            <a href="#" class="text-white"> contract terms </a>
            and 
            <a href="#" class="text-white"> potential risks.</a>
            </label>
        </div>
        <div class="flex m-5 justify-center w-3/4 overflow-auto">
            <button class="bg-white mr-5 hover:bg-transparent text-black font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-white rounded">
                Upload
            </button>
        </div>
        <div class="flex m-5 justify-center w-3/4 overflow-auto">
        </div>
    </section>
  )
}

export default Upload