import React from "react";
import location from "../../images/location.png";

export default function Navbar() {
  return (
    <div className="bg-white h-24 flex justify-center fixed left-0 right-0 top-0 z-10">
      <div className="w-fw mx-auto justify-between items-center bg-white grid grid-cols-3 gap-2">
        <div className="w-48">
          <a href="/">
            <img className="w-20 h-20" src={location} />
          </a>
        </div>
        <div id="center" className="flex">
          <div className="h-24 w-32 flex items-center">
            <a
              href="/Maps"
              className="
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white 
          font-medium  rounded-none  
          text-center 
          inline-flex items-center 
          justify-center"
            >
              <p>HARİTA</p>
            </a>
          </div>
          <div className="h-24 w-32 flex items-center">
            <a
              href="/Contribution"
              className="
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white 
          font-medium  rounded-none  
          text-center 
          inline-flex items-center 
          justify-center"
            >
              <p>KATKI YAP</p>
            </a>
          </div>
          <div className="h-24 w-32 flex items-center">
            <a
              href="/Profile"
              className="
          h-full w-full
          hover:bg-[#262a32]
          hover:text-white 
          font-medium  rounded-none  
          text-center 
          inline-flex items-center 
          justify-center"
            >
              <p>PROFİL</p>
            </a>
          </div>
        </div>
        <div class="flex justify-center ml-64">
          <div class="flex md:order-2">
            <div class="hidden relative mr-3 md:mr-0 md:block">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-icon"
                class="block p-3 pl-10 w-48 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search any place..."
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
