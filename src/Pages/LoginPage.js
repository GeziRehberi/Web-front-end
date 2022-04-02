import React, { useState, useEffect } from "react";
import brand from "../images/brand.jpg";

export default function LoginPage() {
  return (
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
  );
}
