import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import singUpAuth from "../../lib/Utilities/signup/signUpMutations";
import Input from "./Input";

type Props = {};

const SignUpForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState(Date);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    error: undefined,
    success: undefined,
    passError: undefined,
  });
  const router = useRouter();
  const submitHandler = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    // const mode = "signup";
    const response = await singUpAuth({ name, email, password, dob });
    setError(response);
    if (response?.success) {
      await router.push("/");
    }
    setIsLoading(false);
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
            error={error?.error}
            value={name}
          />
          <Input
            type="email"
            placeholder="johndoe@gmail.com"
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            error={error?.error}
            value={email}
          />
          <Input
            type="password"
            placeholder="12vijv9n21n9v0j9r23r"
            onChange={(e: any) => {
              setPaswword(e.target.value);
            }}
            value={password}
            error={error?.passError || error?.error}
          />
          {error?.passError && (
            <div>
              <h1 className="text-red-600">{error?.passError}</h1>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex justify-center items-center gap-1  w-full border border-gray-300border-opacity-70 focus:border-opacity-100 rounded-md px-4 py-3">
              <input
                type="date"
                className="w-full bg-inherit focus-within:outline-none px-1"
                required
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
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
          {error?.error && (
            <div>
              <h1 className="text-red-600">{error?.error}</h1>
            </div>
          )}
          <button
            className={`bg-blue-500 text-white rounded-md py-3 flex justify-center ${
              isLoading && "bg-gray-400"
            }`}
          >
            {isLoading && (
              <svg
                aria-hidden="true"
                className="mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
            {isLoading ? <span>Loading...</span> : <span>Sign Up</span>}
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

export default SignUpForm;
