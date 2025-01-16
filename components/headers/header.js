"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

//media
import logo from "@/public/logo.png"

import IconToggler2 from "../icons/IconToggler2";
import { useAuth } from "../auth/authprovider";
import IconClose from "../icons/icon-close";
import Image from "next/image";

export default function Header() {
  const { setDropMenu } = useAuth();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [path, setPath] = useState("");

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
      } else {
        // Scrolling down
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="bg-black text-white border-gray-200 m-auto px-2 md:px-10 py-6">
        <div className="flex flex-wrap justify-between items-center m-auto">
          <div className="flex justify-start items-center lg:w-3/12">
            <Link href="/" className="flex">
              <Image src={logo} className="w-32" alt="FlowBite Logo" />
            
            </Link>
          </div>
          <div className="hidden md:inline">
            <ul className="flex justify-end items-center space-x-5">
              <li
              onClick={() => setPath("")}
                className={`${
                  path === ""
                    ? "flex text-red-600 justify-center items-center font-bold"
                    : ""
                }`}
              >
                <Link
                  href="/"
                  className={`flex items-center focus:outline-none`}
                >
                  Home
                </Link>
              </li>
              <li
                onClick={() => setPath("about")}
                className={`${
                  path === "about"
                    ? "flex text-red-600 justify-center items-center font-bold"
                    : ""
                }`}
              >
                <Link href="#about">About</Link>
              </li>
              <li
              onClick={() => setPath("team")}
                className={`${
                  path === "team"
                    ? "flex text-red-600 justify-center items-center font-bold"
                    : ""
                }`}
              >
                <Link href="#team">Team</Link>
              </li>
              <li onClick={() => setPath("partner")}
                className={`${
                  path === "partner"
                    ? "flex text-red-600 justify-center items-center font-bold"
                    : ""
                }`}>
                <Link href="#partner">Partnership</Link>
              </li>
              <li onClick={() => setPath("scout")}
                className={`${
                  path === "scout"
                    ? "flex text-red-600 justify-center items-center font-bold"
                    : ""
                }`}>
                <Link href="#varifiedScout">Scout verification</Link>
              </li>
              <li onClick={() => setPath("contact")}
                className={`${
                  path === "contact"
                    ? "flex text-red-600 justify-center items-center font-bold"
                    : ""
                }`}>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setDropMenu((prev) => !prev)}
            className="md:hidden w-6"
          >
           
              <span className="w-full">
                <IconToggler2 />
              </span>
            
          </button>
        </div>
      </nav>
    </header>
  );
}
