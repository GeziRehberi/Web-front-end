import React from "react";
import location from "../../images/location.png";
import profileUser from "../../images/ProfileUser.png";
import search from "../../images/Search.png";

export default function Navbar() {
  return (
    <div className="bg-gray-300 h-20 flex  justify-center left-0 right-0 top-0 z-10">
      <div className="w-fw mx-auto flex justify-between items-center bg-gray-300">
        <div className="h-20 w-full flex items-center">
          <div className="w-48">
            <a href="/">
              <img className="w-20 h-20" src={location} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
