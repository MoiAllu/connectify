import { Fragment } from "react";

const SingnInForm = () => {
  return (
    <Fragment>
      <div className=" bg-black flex items-center justify-center h-screen">
        {/* <div className="text-white">
          <h1>Sign In</h1>
          <h3>Welcome back,you've been missed!</h3>
        </div> */}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex outline p-2 shadow-lg rounded-xl text-gray-600 w-[600px] mb-4  hover:outline-blue-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-at p-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="4" />
              <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
            </svg>
            <input
              className="bg-inherit p-1  focus:outline-none w-[600px] "
              placeholder="enter email"
              type="email"
            ></input>
          </div>
          <div className="flex outline p-2 shadow-lg rounded-xl text-gray-600 w-[600px] hover:outline-blue-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-lock p-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="16" r="1" />
              <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
            </svg>
            <input
              className="bg-inherit p-1  focus:outline-none h-inherit w-[600px] "
              placeholder="enter email"
              type="password"
            ></input>
          </div>
          <div className="flex mb-6  text-gray-800 w-[600px]">
            <div className=" ">
              <input
                className=""
                type="checkbox"
                id="check"
                value="check"
              ></input>
              <label className=" pl-3  w-[300px]" htmlFor="check">
                Remember me
              </label>
            </div>
            <div className=" mr-5 justify-end text-right max-w-[300px]">
              <h4>Forgot Password?</h4>
            </div>
          </div>
          <div className="w-[600px] bg-blue-500 text-lg p-4 rounded-lg ">
            <button className="text-center w-full text-white">Sign In</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default SingnInForm;
