import React, { useEffect, useState } from "react";
import Navbar from "../NavBar";
import LeftSidebar from "../LeftSideBar";
import RightSidebar from "../RightSideBar";
import { NextRouter, useRouter } from "next/router";
import { motion } from "framer-motion";
type props = {};

const Layout = ({ children, user }: any) => {
  //condition for not diplaying right sideBar on profile Page:
  const router: NextRouter = useRouter();
  const [hideRightBar, isHideRightBar] = useState(false);
  useEffect(() => {
    if (["/profile", "/messages"].includes(router.pathname)) {
      isHideRightBar(true);
    } else isHideRightBar(false);
  }, [router]);
  const auth: boolean = true;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.6,
        }}
        className="flex bg-gray-50 "
      >
        <Navbar user={user} />
      </motion.div>
      <LeftSidebar />
      <div
        className={`${
          auth ? "lg:w-[calc(100vw-36vw)] right-[18vw]" : "lg:w-[100vw]"
        } ${
          hideRightBar && "lg:w-[calc(100vw-18vw)] right-0"
        } lg:absolute  top-[70px] bg-gray-50 rounded-2xl`}
      >
        {children}
      </div>
      {!hideRightBar && <RightSidebar />}
    </>
  );
};

export default Layout;
