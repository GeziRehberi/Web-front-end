import React, { useState, useEffect } from "react";

export default function ForgotPasswordPage() {
  return (
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
  );
}
