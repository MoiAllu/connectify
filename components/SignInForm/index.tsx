import Link from "next/link";
import React from "react";
import Input from "../SignUpForm/Input";
import { useState } from "react";
import signInAuth from "../../lib/Utilities/signInMutation";
import { useRouter } from "next/router";

type Props = {};

const SignInForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [authError, setAuthError] = useState("");

  const router = useRouter();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      if (await signInAuth({ email, password })) {
        router.push("/");
      }
    } catch {
      setAuthError("Ops error! cannot signIn");
    }
  };
  return (
    <div className="text-blue-500-grey flex flex-col items-center max-w-[700px] w-full text-[12px]">
      <h3 className="text-2xl font-bold">Sign In </h3>
      <p className="text-md mb-4 mt-2 text-center">You&apos;ve been missing.</p>
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
            Sign in with Google
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
            Sign In with Apple
          </button>
        </div>
        <div className="flex gap-3 w-full justify-center items-center max-w-[350px] text-[12px] text-gray-500 font-bold">
          <span className="h-[1px] w-full bg-gray-200 lg:w-1/3"></span>
          OR
          <span className="h-[1px] w-full bg-gray-200 lg:w-1/3"></span>
        </div>

        <form className="flex flex-col gap-2" onSubmit={submitHandler}>
          <div className="text-red-600">
            <h3 className="">{authError}</h3>
          </div>
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
              setPasword(e.target.value);
            }}
            value={password}
          />
          <div className="flex w-full p-2">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="w-[350px] m-1">
              Remember me
            </label>
            <Link href="/forgotpassword">
              <span className="text-right w-[350px] cursor-pointer">
                Forgot password?
              </span>
            </Link>
            {/* <h3 className="text-right w-[350px]">Forgot password?</h3> */}
          </div>
          <button className="bg-blue-500 text-white rounded-md py-3">
            Sign In
          </button>
        </form>

        <p className="text-center">
          Create an Account?{" "}
          <Link href="/signup">
            <span className="ml-2 text-blue-500 underline underline-offset-1 cursor-pointer">
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
