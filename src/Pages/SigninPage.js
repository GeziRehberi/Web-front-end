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
  );
}
