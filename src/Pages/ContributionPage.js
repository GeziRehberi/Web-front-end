import React from "react";
import Navbar from "../components/Navbar/Navbar";

export default function ContributionPage() {
  return (
    <div>
      <Navbar />
      <div className="w-48 ml-32 mt-8">
        <a href="/"></a>
      </div>
      <div className="w-full mx-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
              Add New Place
            </h1>
          </div>

          <form>
            <div id="formdiv" className="flex w-fw mx-auto space-x-24">
              <div id="biric" className="w-full mt-4">
                <input
                  name="Place"
                  type="text"
                  placeholder="Place Name"
                  className={
                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                  }
                />
                <input
                  name="City"
                  type="text"
                  placeholder="City Name"
                  className={
                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                  }
                />
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1.5"
                  for="grid-state"
                >
                  Address
                </label>
                <textarea
                  placeholder="Exp: TR street, 50. N "
                  class="w-full h-16 px-3 py-2 text-sm text-gray-700 border rounded-lg outline-none"
                ></textarea>

                <div class="rounded-lg shadow-xl bg-gray-50">
                  <div class="m-4">
                    <label class="inline-block mb-2 text-gray-500">
                      Upload Image(jpg,png,svg,jpeg)
                    </label>
                    <div class="flex items-center justify-center w-full">
                      <label class="flex flex-col w-full h-24 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 mb-4">
                        <div class="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-gray-400 group-hover:text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo
                          </p>
                        </div>
                        <input type="file" class="opacity-0" />
                      </label>
                    </div>
                  </div>
                  {/* <div class="flex p-2 space-x-4">
                    <button class="px-4 py-2 text-white bg-green-300 hover:bg-green-500 rounded shadow-xl">
                      Select
                    </button>
                  </div> */}
                </div>
              </div>

              <div id="ikiic" className=" w-full">
                <input
                  name="Times"
                  type="text"
                  placeholder="Opening/Closing Hours"
                  className={
                    "mt-4 w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                  }
                />
                <input
                  name="Contact"
                  type="text"
                  placeholder="Contact"
                  className={
                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                  }
                />
                <input
                  name="WebSite"
                  type="text"
                  placeholder="Web Site"
                  className={
                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 "
                  }
                />
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1.5"
                  for="grid-state"
                >
                  Description
                </label>
                <textarea
                  placeholder="Tell us about this place..."
                  class="w-full h-16 px-3 py-2 text-sm text-gray-700 border rounded-lg outline-none"
                ></textarea>
                <div class="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    CAtegory
                  </label>
                  <div class="w-48 relative mb-16">
                    <select
                      class="w-full block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Restaurant</option>
                      <option>Shop</option>
                      <option>School</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-3 justify-center">
                  <button
                    className={
                      "bg-blue-700 hover:bg-blue-500 mt-4 py-2 px-8 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                    }
                    value="Signin"
                  >
                    Add Place
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
