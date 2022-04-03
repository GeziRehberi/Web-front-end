import React, { useState, useEffect } from "react";
import brand from "../images/brand.jpg";

export default function ForgotPasswordPage() {
  return (
    <figure className="w-full grid grid-rows justify-center">
      <div className="w-48 ml-32">
        <a href="/">
          <img src={brand} alt="brand" />
        </a>
      </div>
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
              Validation Password
            </h1>
          </div>
          <form>
            <label className="text-left">E mail:</label>
            <input
              name="email"
              type="text"
              placeholder="email"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label className="text-left">E mail verify:</label>
            <input
              name="confirmemail"
              type="text"
              placeholder="email"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                className={
                  "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                value="ForgotPassword"
              >
                Send e mail
              </button>
            </div>
          </form>
        </div>
      </div>
    </figure>
  );
}
