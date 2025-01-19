"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useAuth } from "@/components/auth/authprovider";
import { useEffect, useState } from "react";
import IconClose from "../icons/icon-close";

export default function DropDownMenu() {
  const { setDropMenu } = useAuth();
  const [isMounted, setIsMounted] = useState(false);
  const [hashPath, setHashPath] = useState("");
  const params = useParams();
  useEffect(() => {
    if (isMounted) {
      setHashPath(window.location.hash);
    } else {
      setIsMounted(true);
    }
  }, [isMounted, params]);
  const pathname = usePathname();
  const fullPath = `${pathname}${hashPath}`;

  const menuClass = (path) => {
    return fullPath == path
      ? "flex text-red-600 font-bold"
      : "";
  };

  return (
    <div className="z-50 relative">
      <button
        onClick={() => setDropMenu((prev) => !prev)}
        className="md:hidden w-6 absolute top-1 end-1"
      >
        <span className="min-w-full text-red-600">
          <IconClose />
        </span>
      </button>
      <ul className="flex-row justify-end pt-4 items-center space-y-8">
        <li className={menuClass("/")}>
          <Link href="/">Home</Link>
        </li>
        <li className={menuClass("/#about")}>
          <Link href="#about">About</Link>
        </li>
        <li className={menuClass("/#team")}>
          <Link href="#team">Team</Link>
        </li>
        <li className={menuClass("/#partner")}>
          <Link href="#partner">Partnership</Link>
        </li>
        <li className={menuClass("/#verifiedScout")}>
          <Link href="#verifiedScout">Scout verification</Link>
        </li>
        <li className={menuClass("/blog")}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={menuClass("/#contact")}>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
