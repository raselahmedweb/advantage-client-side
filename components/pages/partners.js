"use client";
import Container from "@/components/pages/container";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import apiReq from "../api/axios";

export default function Partners() {
  const [CexProjectPartners, setCexProjectPartners] = useState([]);
  const [KolsCallsPartners, setKolsCallsPartners] = useState([]);
  const cexSliderRef = useRef(null);
  const kolsSliderRef = useRef(null);
  const isCexHovered = useRef(false);
  const isKolsHovered = useRef(false);

  // Fetch all Cex & Project partners
  useEffect(() => {
    apiReq({
      endPoint: `partners/Cex & Project`,
      method: "get",
    })
      .then((res) => {
        const partners = res?.data?.partners || [];
        setCexProjectPartners([...partners, ...partners]); // Duplicate for infinite scroll
      })
      .catch((err) => console.log(err.message));
  }, []);

  // Fetch all Kols & Calls partners
  useEffect(() => {
    apiReq({
      endPoint: `partners/Kols & Calls`,
      method: "get",
    })
      .then((res) => {
        const partners = res?.data?.partners || [];
        setKolsCallsPartners([...partners, ...partners]); // Duplicate for infinite scroll
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    const scrollContent = (slider, isHovered, direction) => {
      let animationId;
      let scrollAmount = 0;

      const scroll = () => {
        if (!isHovered.current) {
          scrollAmount += direction * 1.5; // Adjust speed here
          if (scrollAmount >= slider.scrollWidth / 2) scrollAmount = 0; // Reset for infinite loop
          if (scrollAmount < 0) scrollAmount = slider.scrollWidth / 2; // Reset for reverse loop
          slider.scrollLeft = scrollAmount;
        }
        animationId = requestAnimationFrame(scroll);
      };

      const handleMouseEnter = () => (isHovered.current = true);
      const handleMouseLeave = () => (isHovered.current = false);

      scroll();
      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationId);
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    const cexCleanup = scrollContent(cexSliderRef.current, isCexHovered, 1); // Scroll left
    const kolsCleanup = scrollContent(kolsSliderRef.current, isKolsHovered, -1); // Scroll right

    return () => {
      cexCleanup();
      kolsCleanup();
    };
  }, [CexProjectPartners, KolsCallsPartners]);

  return (
    <Container id="partner">
      <div className="flex-row space-y-16 bg-gray-500 bg-opacity-25 rounded-xl shadow py-5 md:p-5">
        {/* Cex & Project Partners */}
        <div>
          <div className="flex justify-center">
            <h3 className="text-2xl md:text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 inline-block">
              Partnership with Cex & Project
            </h3>
          </div>

          <div className="mt-3 border-t border-2 border-yellow-400 mx-auto w-24"></div>
          <div
            ref={cexSliderRef}
            className="flex items-center justify-center space-x-5 mt-5 md:mt-10 overflow-x-scroll no-scrollbar"
            style={{
              whiteSpace: "nowrap",
              scrollbarWidth: "none", // Hide scrollbar in Firefox
              msOverflowStyle: "none", // Hide scrollbar in IE 10+
            }}
          >
            {CexProjectPartners.length ? (
              CexProjectPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center lg:w-1/6 w-2/6 flex-shrink-0 max-h-28 overflow-hidden bg-white"
                >
                  <div className="p-2">
                    <Image
                      src={`https://advantage-server-side.onrender.com/photos/partner/${partner.photo}`}
                      alt="partner image"
                      width={100}
                      height={100}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>No partners found</div>
            )}
          </div>
        </div>

        {/* Kols & Calls Partners */}
        <div>
        <div className="flex justify-center">
            <h3 className="text-2xl md:text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 inline-block">
            Partnership with Kols & Calls
            </h3>
          </div>
          
          <div className="mt-3 border-t border-2 border-yellow-400 mx-auto w-24"></div>
          <div
            ref={kolsSliderRef}
            className="flex items-center justify-center mt-5 md:mt-10 space-x-5 overflow-x-scroll no-scrollbar"
            style={{
              whiteSpace: "nowrap",
              scrollbarWidth: "none", // Hide scrollbar in Firefox
              msOverflowStyle: "none", // Hide scrollbar in IE 10+
            }}
          >
            {KolsCallsPartners.length ? (
              KolsCallsPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center lg:w-1/6 w-2/6 flex-shrink-0 max-h-28 overflow-hidden bg-white"
                >
                  <div className="p-2">
                    <Image
                      src={`https://advantage-server-side.onrender.com/photos/partner/${partner.photo}`}
                      alt="partner image"
                      width={100}
                      height={100}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>No partners found</div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
