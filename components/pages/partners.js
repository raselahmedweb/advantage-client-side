"use client";
import Container from "@/components/pages/container";
import Image from "next/image";
import { useEffect, useState } from "react";
import IconLeft from "@/components/icons/icon-left";
import IconRight from "@/components/icons/icon-right";
import apiReq from "../api/axios";

export default function Partners() {
  const [isLoading, setIsLoading] = useState(false);
  const [CexProjectPartners, setCexProjectPartners] = useState([]);
  const [KolsCallsPartners, setKolsCallsPartners] = useState([]);
  const [totalPartnersCex, setTotalPartnersCex] = useState(0);
  const [totalPartnersKols, setTotalPartnersKols] = useState(0);

  // Pagination states for both APIs
  const [CexProjectPartnersPage, setCexProjectPartnersPage] = useState(1);
  const [KolsCallsPartnersPage, setKolsCallsPartnersPage] = useState(1);
  const [size] = useState(6);

  // Calculate total pages for both
  const totalPagesCex = Math.ceil(totalPartnersCex / size);
  const totalPagesKols = Math.ceil(totalPartnersKols / size);

  // Fetch Cex & Project Partners based on page
  const fetchCexProjectPartners = (page) => {
    setIsLoading(true);
    apiReq({
      endPoint: `partners/Cex & Project/${page}`,
      method: "get",
    })
      .then((res) => {
        setCexProjectPartners(res?.data?.partners);
        setTotalPartnersCex(res?.data?.totalPartners);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  };

  // Fetch Kols & Calls Partners based on page
  const fetchKolsCallsPartners = (page) => {
    setIsLoading(true);
    apiReq({
      endPoint: `partners/Kols & Calls/${page}`,
      method: "get",
    })
      .then((res) => {
        setKolsCallsPartners(res?.data?.partners);
        setTotalPartnersKols(res?.data?.totalPartners);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  };

  // Fetch data for both categories when the component mounts
  useEffect(() => {
    fetchCexProjectPartners(CexProjectPartnersPage);
    fetchKolsCallsPartners(KolsCallsPartnersPage);
  }, [CexProjectPartnersPage, KolsCallsPartnersPage]);

  // Handlers for Previous and Next buttons
  const handlePrevClick = (type) => {
    if (type === "Cex") {
      if (CexProjectPartnersPage > 1) {
        setCexProjectPartnersPage(CexProjectPartnersPage - 1); // Decrease Cex page
      }
    } else if (type === "Kols") {
      if (KolsCallsPartnersPage > 1) {
        setKolsCallsPartnersPage(KolsCallsPartnersPage - 1); // Decrease Kols page
      }
    }
  };

  const handleNextClick = (type) => {
    if (type === "Cex") {
      if (CexProjectPartnersPage < totalPagesCex) {
        setCexProjectPartnersPage(CexProjectPartnersPage + 1); // Increase Cex page
      }
    } else if (type === "Kols") {
      if (KolsCallsPartnersPage < totalPagesKols) {
        setKolsCallsPartnersPage(KolsCallsPartnersPage + 1); // Increase Kols page
      }
    }
  };

  return (
    <Container id="partner">
      <div className="flex-row space-y-5 bg-white rounded-xl shadow py-5 md:p-5">
        <div>
          <div className="mb-5">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              Partnership with Cex & Project
            </h3>
            <div className="mt-3 border-t border-2 border-yellow-400 mx-auto w-24"></div>
          </div>
          <div className="flex justify-between items-center space-x-2">
            <div className="sliderBtn">
              <button
                className={`nextBtn flex justify-center items-center ${
                  CexProjectPartnersPage === 1
                    ? "cursor-not-allowed opacity-50" // Disabled button style
                    : "cursor-pointer transition-all" // Normal button style
                }`}
                onClick={() => handlePrevClick("Cex")}
                disabled={CexProjectPartnersPage === 1} // Disable if on first page
              >
                <IconLeft />
              </button>
            </div>
            <div className="flex flex-wrap justify-center">
              {CexProjectPartners.length ? (
                CexProjectPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="w-1/3 flex justify-center items-center md:w-1/6 lg:w-1/6 max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 overflow-hidden border"
                  >
                    <div className="p-1 md:p-3">
                      <Image
                        src={`http://localhost:4000/photos/partner/${partner.photo}`}
                        alt="partner image"
                        width={0}
                        height={0}
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
            <div className="sliderBtn">
              <button
               className={`nextBtn flex justify-center items-center ${
                CexProjectPartnersPage === totalPagesCex
                  ? "cursor-not-allowed opacity-50" // Disabled button style
                  : "cursor-pointer transition-all" // Normal button style
              }`}
                onClick={() => handleNextClick("Cex")}
                disabled={CexProjectPartnersPage === totalPagesCex} // Disable if on last page
              >
                <IconRight />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              Partnership with Kols & Calls
            </h3>
            <div className="mt-3 border-t border-2 border-yellow-400 mx-auto w-24"></div>
          </div>
          <div className="flex justify-between items-center space-x-2">
            <div className="sliderBtn">
              <button
                className={`nextBtn flex justify-center items-center ${
                  KolsCallsPartnersPage  === 1
                    ? "cursor-not-allowed opacity-50" // Disabled button style
                    : "cursor-pointer transition-all" // Normal button style
                }`}
                onClick={() => handlePrevClick("Kols")}
                disabled={KolsCallsPartnersPage === 1} // Disable if on first page
              >
                <IconLeft />
              </button>
            </div>
            <div className="flex flex-wrap justify-center">
              {KolsCallsPartners.length ? (
                KolsCallsPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="w-1/3 flex justify-center items-center md:w-1/6 lg:w-1/6 max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 overflow-hidden border"
                  >
                    <div className="p-1 md:p-3">
                      <Image
                        src={`http://localhost:4000/photos/partner/${partner.photo}`}
                        alt="partner image"
                        width={0}
                        height={0}
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
            <div className="sliderBtn">
              <button
                className={`nextBtn flex justify-center items-center ${
                  KolsCallsPartnersPage === totalPagesKols
                    ? "cursor-not-allowed opacity-50" // Disabled button style
                    : "cursor-pointer transition-all" // Normal button style
                }`}
                onClick={() => handleNextClick("Kols")}
                disabled={KolsCallsPartnersPage === totalPagesKols} // Disable if on last page
              >
                <IconRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
