'use client';
import DropDownMenu from "@/components/headers/dropdownmeno";
import Header from "@/components/headers/header";
import { useAuth } from "@/components/auth/authprovider";
import TopHeader from "@/components/headers/topheader";

export default function InnerLayout({children}) {
    const { dropMenu } = useAuth();
  return (
    <>
    <TopHeader/>
      <Header />
      <div className="h-20"></div>
      <div
        className={`bg-customBg1 w-full sm:w-80 md:hidden fixed top-16 end-0 p-4 transition-transform duration-500 ease-in-out ${
          dropMenu ? "translate-x-0" : "translate-x-full"
        }`}
      ><DropDownMenu/></div>
      {children}
    </>
  );
}
