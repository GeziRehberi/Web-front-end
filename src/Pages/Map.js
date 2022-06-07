import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Map() {
  return (
    <div>
      {<Navbar />}
      <iframe
        className="mt-24 float-right w-full h-fw"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=turkey%20ankara&t=&z=11&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
}
