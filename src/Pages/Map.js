import React from "react";
import Navbar from "../components/Navbar/Navbar";

export default function Map() {
  return (
    <div>
      {<Navbar />}
      <iframe
        className="mt-24 float-right"
        width="1080px"
        height="840px"
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
