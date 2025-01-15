"use client";

import {  usePathname } from "next/navigation";
import Link from "next/link";

//media
import logo from "@/public/logo.png"

import IconToggler2 from "../icons/IconToggler2";
import { useAuth } from "../auth/authprovider";
import IconClose from "../icons/icon-close";
import Image from "next/image";

export default function TopHeader() {
  const {dropMenu,setDropMenu} = useAuth();
  // usiLocation hook will be use to give menu class based on route
  const pathname = usePathname();

  const menuClass = (path) => {
    return pathname == path
      ? "flex justify-center items-center font-bold"
      : "";
  };


  return (
    <header
      className="absolute top-0 w-full z-50 transition-transform duration-300 ease-in-out"
    >
      <nav className="bg-black text-white border-gray-200 m-auto px-2 md:px-10 py-6">
        <div className="flex flex-wrap justify-between items-center m-auto">
          <div className="flex justify-start items-center">
            <Link href="/" className="flex">
              <Image src={logo} className="w-32" alt="FlowBite Logo" />
            </Link>
          </div>
          <div className="hidden md:inline w-6/12">
            <ul className="flex justify-end items-center space-x-16">
              <li className={`${menuClass("/")}`}>
                <Link
                  href="/"
                  className={`flex items-center focus:outline-none`}
                >
                  Home
                </Link>
              </li>
              <li className={`${menuClass("/about")}`}>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li className={`${menuClass("/services")}`}>
                <Link href="/services">
                  Services
                </Link>
              </li>
              <li className={`${menuClass("/contact")}`}>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={()=>setDropMenu((prev)=>!prev)} className="md:hidden w-6">
            {!dropMenu ? <span className="w-full"><IconToggler2/></span>:<span className="min-w-full"><IconClose/></span>}
          </button>
          
        </div>
      </nav>
    </header>
  );
}
