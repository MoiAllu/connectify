import Image from "next/image";

const Reply = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <Image
        className="rounded-full min-w-[28px] min-h-[28px]"
        src={"/square.jpg"}
        alt="Avatar Image"
        objectFit="fill"
        width={40}
        height={40}
      />
      <input
        type="text"
        className="bg-gray-50 shadow-sm flex-1 p-1.5 rounded-lg outline-none"
        placeholder="Write your reply"
      />
      <button className="bg-sky-200 hover:bg-sky-300 p-1.5 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="10" y1="14" x2="21" y2="3" />
          <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
        </svg>
      </button>
    </div>
  );
};
export default Reply;
