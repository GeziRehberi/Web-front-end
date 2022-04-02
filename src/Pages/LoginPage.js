import React, { useState, useEffect } from "react";
import brand from "../images/brand.jpg";

export default function LoginPage() {
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
              Login to your account
            </h1>
          </div>
          <form>
            <label className="text-left">E mail:</label>
            <input
              name="email"
              placeholder="e mail"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <a className="text-xs text-blue-500" href="/ForgotPasswordPage">
              Forgot Password ?
            </a>
            <div className="flex items-center mt-3 justify-center">
              <button
                className={
                  "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                value="Login"
              >
                Log in
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center">
            <button className={"justify-center text-blue-500 hover:underline"}>
              <a href="/SigninPage">Sign in</a>
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}
