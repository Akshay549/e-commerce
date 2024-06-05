import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="h-20 px-4 md:px-16 lg:px-32 2xl:px-64 relative">
        <div className="flex justify-between items-center h-full py-4">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-wide decoration-0"
          >
            UrbanBazaar
          </Link>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default NavBar;
