import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/header";
import DropDownMenu from "@/components/headers/dropdownmeno";
import AuthProvider from "@/components/auth/authprovider";
import InnerLayout from "@/components/innerLayout/inner-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Advantage Venture",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black text-start`}
      >
        <AuthProvider>
        <InnerLayout>{children}</InnerLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
