import React from "react";
import Navbar from "../NavBar";
import LeftSidebar from "../LeftSideBar";
import RightSidebar from "../RightSideBar";
import CreatePost from "../Cards/CreatePost";

type props = {};

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="flex bg-gray-50 ">
        <Navbar />
        <LeftSidebar />
      </div>
      <div className="lg:w-[calc(100vw-36vw)] lg:absolute right-[18vw] top-[70px] bg-gray-50 rounded-2xl  sm:absolute ">
        <CreatePost />
        {children}
      </div>

      <RightSidebar />
    </div>
  );
};

export default Layout;
