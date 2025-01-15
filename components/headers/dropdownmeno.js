"use client";
import Link from "next/link";
import { useAuth } from "@/components/auth/authprovider";
import { useState } from "react";

export default function DropDownMenu() {
  const { setDropMenu } = useAuth();
    const [path, setPath] = useState("");
  
  return (
    <div className="z-50">
      <ul className="flex-row justify-end pt-4 items-center space-y-8">
        
        <li
          onClick={() => {
            setPath("");
            setDropMenu((p) => !p);
          }}
          className={`${
            path === "" ? "flex text-red-600 items-center font-bold" : ""
          }`}
        >
          <Link href="/">
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            setPath("about");
            setDropMenu((p)=>!p);
          }}
          className={`${
            path === "about" ? "flex text-red-600 items-center font-bold" : ""
          }`}
        >
          <Link href="#about">About</Link>
        </li>
        <li
          onClick={() => {
            setPath("team");
            setDropMenu((p)=>!p);
          }}
          className={`${
            path === "team" ? "flex text-red-600 items-center font-bold" : ""
          }`}
        >
          <Link href="#team">Team</Link>
        </li>
        <li
          onClick={() => {
            setPath("partner");
            setDropMenu((p)=>!p);
          }}
          className={`${
            path === "partner"
              ? "flex text-red-600 items-center font-bold"
              : ""
          }`}
        >
          <Link href="#partner">Partnership</Link>
        </li>
        <li
          onClick={() => {
            setPath("scout");
            setDropMenu((p)=>!p);
          }}
          className={`${
            path === "scout" ? "flex text-red-600 items-center font-bold" : ""
          }`}
        >
          <Link href="#varifiedScout">Scout verification</Link>
        </li>
        <li
          onClick={() => {
            setPath("contact");
            setDropMenu((p)=>!p);
          }}
          className={`${
            path === "contact"
              ? "flex text-red-600 items-center font-bold"
              : ""
          }`}
        >
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
