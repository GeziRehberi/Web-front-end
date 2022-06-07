import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Tabs from "../components/Tabs";

export default function ProfilePage() {
  return (
    <div>
      <Navbar />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <div class="w-full h-20 flex justify-center fixed left-0 right-0 top-0 z-10 pt-32 ">
        <div class="w-full md:w-2/3 lg:w-2/3 border-l border-r">
          <div class="flex p-4 items-center">
            <div class="ml-8">
              <p class="font-bold">Josh W</p>
            </div>
          </div>

          <div class="flex justify-between">
            <div class="rounded-full border-4 border-white inline-block -mt-16 w-32 ml-3">
              <img
                class="w-32 rounded-full"
                src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
              />
            </div>

            <div>
              <a href="/">
                <button className="rounded-full px-2 py-2 mt-3 mr-3 transition hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">
                  Çıkış Yap
                </button>
              </a>
            </div>
          </div>

          <div class="ml-3">
            <p class="font-bold text-lg">Furkan Yilmaz</p>
            <p class="text-gray-500">@fy</p>
          </div>

          <div class="px-3 mt-3">
            <p>I'm developing a project on a graduation project</p>
          </div>

          <div class="px-3 flex mt-3">
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt"></i>
              <p class="ml-2">Manisa, TR</p>
            </div>
          </div>

          <div class="px-3 mt-3 flex">
            <p class="cursor-pointer hover:underline">
              <span class="font-bold">279</span> Following
            </p>
            <p class="ml-5 cursor-pointer hover:underline">
              <span class="font-bold">979</span> Followers
            </p>
          </div>
          {<Tabs />}
        </div>
      </div>
    </div>
  );
}
