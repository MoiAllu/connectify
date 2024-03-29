import Link from "next/link";
import React from "react";

type Props = {};

const UpcomingBirthdays = (props: Props) => {
  return (
    <Link href={"/"}>
      <div className="px-1 min-w-[290px] max-w-[290px] h-[175px]">
        <div className="bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center gap-3 px-3 py-2 mt-4 cursor-pointer">
          <div className="bg-orange-200 p-3 rounded-xl h-3/4 ">
            <svg
              width="24"
              height="24"
              className="fill-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M23 20v4h-22v-4h22zm-22-1v-3h22v3h-22zm20.453-9c1.256.011 2.534 1.051 2.547 2.5.012 1.38-1.176 2.5-2.625 2.5-1.028 0-1.92-.564-2.35-1.386-.43.822-1.322 1.386-2.35 1.386-1.019 0-1.903-.554-2.337-1.362-.436.808-1.319 1.362-2.338 1.362-1.019 0-1.902-.554-2.337-1.362-.435.808-1.319 1.362-2.338 1.362-1.028 0-1.919-.564-2.35-1.386-.431.822-1.322 1.386-2.35 1.386-1.449 0-2.637-1.12-2.625-2.5.013-1.449 1.292-2.489 2.546-2.5h1.454v-2.974h2v2.974h5v-5h2v5h5v-3h2v3h1.453zm-17.3-3.451c-1.897-.621-1.351-3.444.89-4.523.08 1.422 1.957 1.566 1.957 3.002 0 .602-.441 1.274-1.084 1.521.154-.509-.186-1.416-.88-1.809-.702.407-1.063 1.302-.883 1.809zm13.999-.026c-1.896-.621-1.35-3.444.891-4.523.08 1.422 1.957 1.566 1.957 3.002 0 .602-.441 1.274-1.084 1.521.153-.509-.186-1.416-.88-1.809-.702.407-1.063 1.302-.884 1.809zm-6.999-2c-1.897-.621-1.351-3.444.89-4.523.08 1.422 1.957 1.566 1.957 3.002 0 .602-.441 1.274-1.084 1.521.153-.509-.186-1.416-.88-1.809-.702.407-1.063 1.302-.883 1.809z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-md text-gray-700">
              Upcoming Birthdays
            </p>
            <p className="text-gray-500 text-xs">
              See 12 others have upcoming birthdays
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UpcomingBirthdays;
