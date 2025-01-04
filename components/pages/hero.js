import Link from "next/link";

import AnimatedButton from "../button/movingbutton";

export default function Hero() {
  return (
    <section className="lg:w-10/12 m-auto px-4 md:px-8 lg:px-20 mt-5 md:pt-16 xl:pt-20 h-screen text-white">
      <div className="z-20 flex flex-col space-y-3 md:space-y-10 items-center justify-center md:mt-16">
        <div className="flex-row space-y-5 text-center md:w-8/12 xl:w-6/12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Modern wealth management for <i className="font-normal">everyone</i>
          </h1>
          <p>
            <b>Advantage Venture</b> supports projects for Strategic
            Fundraising, Tier-1 CEX Listings, and Influential Marketing via Tier
            1 Kols and Calls community
          </p>
          <Link
            href="#contact"
            className="block mx-auto text-center w-32 py-2 mt-2 rounded bg-black text-white font-bold hover:bg-white hover:text-black border transition duration-300"
          >
            Get in Touch
          </Link>
        </div>

        <div className="m-auto md:ml-auto max-w-80 overflow-hidden rounded-xl bg-white p-5 shadow-sm">
          <div className="flex overflow-hidden rounded-md bg-gray-200 focus:outline focus:outline-blue-500">
            <Link
              href="#varifiedScout"
              className="w-full rounded-bl-md rounded-tl-md bg-green-100 px-4 py-2.5 text-gray-700 font-bold focus:outline-blue-500"
            >
              Seach Varified Scout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
