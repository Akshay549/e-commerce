import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* for mobile view */}
        <div className="md:hidden flex justify-between items-center h-full py-4">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-wide decoration-0"
          >
            UrbanBazaar
          </Link>
          <Menu />
        </div>
        {/* for large screen */}
        <div className="md:flex justify-between items-center h-full py-4">
            <div className="w-1/5"></div>
            <div className="w-1/5"></div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
