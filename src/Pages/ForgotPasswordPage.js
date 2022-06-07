import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import location from "../images/location.png";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [confirmemail, setConfirmemail] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(email, confirmemail));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(email, confirmemail);
    }
  }, [formErrors]);

  const validate = (email, confirmemail) => {
    const errors = {};
    if (!email) {
      errors.email = "E mail is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not valid e mail format!";
    }
    if (email != confirmemail) {
      errors.email = "E mails are must be same!";
    }

    return errors;
  };

  return (
    <figure className="w-full grid grid-rows justify-center h-fw bg-blue-400">
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
              Validation Password
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <p className="text-red-500">{formErrors.email}</p>
            <label className="text-left">E mail:</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label className="text-left">E mail verify:</label>
            <input
              name="confirmemail"
              type="email"
              value={confirmemail}
              onChange={(e) => setConfirmemail(e.target.value)}
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
