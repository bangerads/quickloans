"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/images/pcql_header_logo.png";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    // bg-[#d5e6f1] bg-opacity-19
    <div className="flex bg-[#d5e6f1] gap-4 py-4 px-16 navbar">
      <div className="">
        <Image src={Logo.src} width={147.24} height={31.18} alt={"logo"} />
      </div>
      <div className="flex w-full gap-16 justify-end">
        <div>
          <Link href="/">Home</Link>
        </div>{" "}
        <div>
          <Link href="/about">About us</Link>
        </div>{" "}
        <div>
          <Link href="/personalloans">How it works</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
