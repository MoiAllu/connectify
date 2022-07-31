import React from "react";

type InputTypes = "text" | "email" | "password";

type Props = {
  type: InputTypes;
  placeholder: string;
};

function getSvg(type: string) {
  switch (type) {
    case "email":
      return (
        <svg
          xmlns="http://www.w3.org/1600/svg"
          className="icon icon-tabler icon-tabler-at"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
        </svg>
      );
    case "text":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/1600/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.045 17.51h-.015c-2.285 0-4.469-1.189-6.153-3.349l.789-.614c1.489 1.911 3.394 2.963 5.364 2.963h.013c1.987-.004 3.907-1.078 5.408-3.021l.791.611c-1.693 2.194-3.894 3.405-6.197 3.41zm-3.468-10.01c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
        </svg>
      );

    case "password":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/1600/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M6 6c0-3.311 2.689-6 6-6s6 2.688 6 6v4h3v14h-18v-14h3v-4zm14 5h-16v12h16v-12zm-13-5v4h10v-4c0-2.76-2.24-5-5-5s-5 2.24-5 5z" />
        </svg>
      );
  }
}

const Input: React.FC<Props> = ({ type, placeholder }) => {
  return (
    <div className="flex justify-center items-center gap-1 max-w-[350px] w-full border border-gray-300 border-opacity-70 focus:border-opacity-100 rounded-md px-2 py-1">
      {getSvg(type)}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-inherit focus-within:outline-none p-2"
      />
    </div>
  );
};

export default Input;
