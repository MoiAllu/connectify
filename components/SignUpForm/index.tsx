import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import singUpAuth from "../../lib/Utilities/signUpMutations";
import Input from "./Input";

type Props = {};

const index = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const mode = "signup";
    await singUpAuth({ name, email, password });
    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <div className="text-blue-500-grey flex flex-col items-center max-w-[700px] w-full text-[12px]">
      <h3 className="text-2xl font-bold">Getting Started</h3>
      <p className="text-md mb-4 mt-2 text-center">
        Create an account to continue and connect with the people.
      </p>
      <div className="w-full max-w-[400px] bg-white p-6 flex flex-col gap-2 rounded-md">
        <div className="flex flex-col sm:flex-row gap-2 justify-between">
          <button className="bg-gray-200 rounded-md text-[12px] font-bold text-blue-500-grey flex justify-center items-center px-4 gap-3 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-google"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
            </svg>
            Login with Google
          </button>
          <button className="bg-gray-200 rounded-md text-[12px] font-bold text-blue-500-grey flex  justify-center items-center px-4 gap-3 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
            </svg>
            Login with Apple
          </button>
        </div>
        <div className="flex gap-3 w-full justify-center items-center max-w-[350px] text-[12px] text-gray-500 font-bold">
          <span className="h-[1px] w-full bg-gray-200 lg:w-1/3"></span>
          OR
          <span className="h-[1px] w-full bg-gray-200 lg:w-1/3"></span>
        </div>
        <form className="flex flex-col gap-2" onSubmit={submitHandler}>
          <Input
            type="text"
            placeholder="John Doe"
            onChange={(e: any) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <Input
            type="email"
            placeholder="johndoe@gmail.com"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <Input
            type="password"
            placeholder="12vijv9n21n9v0j9r23r"
            onChange={(e: any) => {
              setPaswword(e.target.value);
            }}
            value={password}
          />

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex justify-center items-center gap-1  w-full border border-gray-300border-opacity-70 focus:border-opacity-100 rounded-md px-4 py-3">
              <input
                type="date"
                className="w-full bg-inherit focus-within:outline-none px-1"
                required
              />
            </div>
            <div className="flex justify-between items-center gap-1  w-full border border-gray-300border-opacity-70 focus:border-opacity-100 rounded-md px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path d="M16 2v2h3.586l-3.972 3.972c-1.54-1.231-3.489-1.972-5.614-1.972-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.125-.741-4.074-1.972-5.614l3.972-3.972v3.586h2v-7h-7zm-6 20c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
              </svg>
              <div className="flex gap-1 items-center justify-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="w-3 h-3 text-black"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="w-3 h-3"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 text-white rounded-md py-3">
            Sign Up
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link href="/signin">
            <span className="ml-2 text-blue-500 underline underline-offset-1 cursor-pointer">
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default index;
