import React from "react";

type Props = {};

const RightSideBar = (props: Props) => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed bottom-0 right-0 w-[18vw] min-h-[calc(100vh-70px)] bg-white gap-3 pt-4">
      Right Sidebar
    </div>
  );
};

export default RightSideBar;
