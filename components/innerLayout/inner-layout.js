"use client";
import DropDownMenu from "@/components/headers/dropdownmeno";
import Header from "@/components/headers/header";
import { useAuth } from "@/components/auth/authprovider";
import { useEffect, useState } from "react";
import ObserverApiInstance from "../intersec_activity/ObserverApiInstance";
import { useSearchParams } from "next/navigation";

export default function InnerLayout({ children }) {
  const { dropMenu } = useAuth();
  const trackPath = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (isMounted) {
      ObserverApiInstance();
    } else {
      setIsMounted(true);
    }
  }, [isMounted, trackPath]);
  return (
    <>
      <Header />
      <div className="h-20"></div>
      <div
        className={`bg-black text-white w-full sm:w-80 md:hidden fixed top-20 end-0 p-4 transition-transform duration-500 ease-in-out ${
          dropMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <DropDownMenu />
      </div>
      {children}
    </>
  );
}
