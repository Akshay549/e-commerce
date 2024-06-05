"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src="/menu.png"
        alt="menu"
        height="30"
        width="30"
        className="cursor-pointer"
        onClick={() => {
          setIsOpen((set) => !set);
        }}
      />
      {isOpen && (
        <div className="bg-black text-center w-full h-[calc(100vh-80px)] absolute left-0 z-10  top-20 flex flex-col gap-7 items-center justify-center">
            <Link href="/" className="decoration-0 text-2xl text-white ">text text</Link>
            <Link href="/" className="decoration-0 text-2xl text-white ">text text</Link>
            <Link href="/" className="decoration-0 text-2xl text-white ">text text</Link>
            <Link href="/" className="decoration-0 text-2xl text-white ">text text</Link>
        </div>
      )}
    </>
  );
};

export default Menu;
