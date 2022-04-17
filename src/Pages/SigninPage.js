import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import location from "../images/location.png";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(email, password, confirmpassword));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(email, password);
    }
  }, [formErrors]);

  const validate = (email, password, confirmpassword) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

    if (!email) {
      errors.email = "E mail is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not valid e mail format!";
    }
    console.log(password);
    if (!password) {
      errors.password = "Password is required!";
    } else if (password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
      console.log("execute");
    } else if (password.length > 12) {
      errors.password = "Password must be less than 12 characters!";
    }
    if (password != confirmpassword) {
      errors.confirmpassword = "Passwords must be same.";
    }
    return errors;
  };

  return (
    <figure className="w-full grid grid-rows justify-center">
      <Navbar />
      {/* <div className="w-48 ml-32 mt-24">
        <a href="/">
          <img src={location} alt="brand" />
        </a>
      </div> */}
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1 mt-32">
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
            <p className="text-red-500">{formErrors.email}</p>
            <label className="text-left">E mail:</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e mail"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <p className="text-red-500">{formErrors.password}</p>
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
            <p className="text-red-500">{formErrors.confirmpassword}</p>
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
            <button className={"justify-center text-blue-500 hover:underline"}>
              <a href="/">Log in</a>
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}
