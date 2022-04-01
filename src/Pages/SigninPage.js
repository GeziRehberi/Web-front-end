import React, { useState, useEffect } from "react";
import brand from "../images/brand.jpg";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

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
              Create a new account
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="text-left">Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label className="text-left">Last Name:</label>
            <input
              name="lastname"
              type="text"
              placeholder="Lastname"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />

            <label className="text-left">E mail:</label>
            <input
              name="email"
              type="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e mail"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />

            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Confirm Password:</label>
            <input
              name="confirmpassword"
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              placeholder="Confirmpassword"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                className={
                  "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                value="Signin"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center">
            <button
              className={"justify-center text-blue-500 hover:underline"}
            ></button>
          </div>
        </div>
      </div>
    </figure>
  );
}
