import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Advantage Venture supports projects for Strategic Fundraising, Tier-1 CEX Listings, and Influential Marketing via Tier 1 Kols and Calls community",
  description: "Advantage Venture supports projects for Strategic Fundraising, Tier-1 CEX Listings, and Influential Marketing via Tier 1 Kols and Calls community",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="/fav-icon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased text-white text-start`}
      >
        <AuthProvider>
          <InnerLayout>{children}</InnerLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
