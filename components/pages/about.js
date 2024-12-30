import Container from "@/components/pages/container";
import Image from "next/image";

import aboutImg from "@/components/images/about.jpg";

export default function About() {
  return (
    <Container id="about">
      <div className="flex-row md:flex justify-center md:justify-between items-stretch space-y-5 md:space-y-0 space-x-0 md:space-x-5">
        <div className="flex flex-col justify-between rounded-xl shadow p-5 w-full md:w-1/2 bg-white">
          <div>
            <h1 className="text-4xl font-bold mb-2">
            About Us
            </h1>
          </div>
          <div>
            <p className="text-black text-lg font-semibold">
              <b>Advantage Venture</b> is a leading crypto consulting company offering
              end-to-end solutions to drive blockchain projects from concept to
              success. We specialize in providing essential services that
              empower projects to thrive in the competitive cryptocurrency
              landscape.
              <br />
              <br />
              Our expertise in fundraising ensures that projects secure the
              financial resources needed to grow. Through seed funding, private
              rounds, and OTC (over-the-counter) deals, we connect projects with
              a network of investors, enabling them to raise capital efficiently
              and strategically.
              <br />
              <br />
              We also excel in marketing by utilizing the influence of Key
              Opinion Leaders (KOLs) and fostering active engagement through
              community calls. These efforts help projects build visibility,
              credibility, and a strong community presence, creating the
              foundation for long-term success.
              <br />
              <br />
              Additionally, <b>Advantage Venture</b>
              offers Tier-1 CEX listing services to enhance projects global
              reach and liquidity. We simplify the process of listing on top
              exchanges like Binance, kucoin ,bybit providing the exposure
              necessary to gain trust and attract investors worldwide.
              <br/>
              <br/>
              Whether you’re a startup or an established blockchain project, <b>Advantage Venture</b> delivers customized solutions tailored to your needs. From
              securing capital to creating impactful marketing campaigns and
              achieving top-tier exchange listings, we are your trusted partner
              in navigating the crypto ecosystem.
            </p>
          </div>
        </div>
        <div className="flex-row space-y-5 w-full md:w-1/2">
          <div>
            <Image
              src={aboutImg}
              className="rounded-xl shadow"
              alt="About our company"
            />
          </div>
          <div className="flex flex-wrap p-5 bg-white rounded-xl shadow">
            <div className="w-full sm:w-1/2 text-center sm:text-start p-1">
              <div className="bg-gray-200 rounded-xl p-3">
                <span className="text-3xl font-bold mb-2 block">3.5</span>
                <span className="text-gray-500 block">years of experience</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 text-center sm:text-start p-1">
              <div className="bg-gray-200 rounded-xl p-3">
                <span className="text-3xl font-bold mb-2 block">3.5</span>
                <span className="text-gray-500 block">years of experience</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 text-center sm:text-start p-1">
              <div className="bg-gray-200 rounded-xl p-3">
                <span className="text-3xl font-bold mb-2 block">3.5</span>
                <span className="text-gray-500 block">years of experience</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 text-center sm:text-start p-1">
              <div className="bg-gray-200 rounded-xl p-3">
                <span className="text-3xl font-bold mb-2 block">3.5</span>
                <span className="text-gray-500 block">years of experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
