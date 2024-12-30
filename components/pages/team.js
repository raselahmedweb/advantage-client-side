"use client";
import { useEffect, useState } from "react";
import Container from "@/components/pages/container";
import Image from "next/image";

//media

import p1 from "@/components/images/team1-cover.png";
import p2 from "@/components/images/team1-profile.png";
import apiReq from "../api/axios";

export default function Team() {
  const [isLoading, setIsLoading] = useState(false);
  const [teamMember, setTeamMember] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(true);
      apiReq({
        endPoint: "team",
        method: "get",
      })
        .then((res) => {
          setTeamMember(res?.data?.team);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [openItems, setOpenItems] = useState({});
  const toggleOpen = (id) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the specific item's open state
    }));
  };
  return (
    <Container id="team">
      <div className="flex-row space-y-5 bg-black text-white rounded-xl shadow p-5">
        <div className="md:w-1/2 lg:w-1/3 text-center m-auto">
          <h2 className="text-3xl font-bold">Advantage Team</h2>
          <div className="mt-3 border-t border-2 border-yellow-400 mx-auto w-24"></div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start">
          {teamMember ? (
            teamMember.map((member, index) => {
              return (
                <div
                  key={index}
                  className="md:pe-5 mb-5 sm:w-4/5 md:w-1/2 xl:w-1/3 2xl:w-1/4"
                >
                  <div className="rounded shadow-lg z-50">
                    <div className="relative overflow-hidden w-full h-64">
                      <Image
                        className="object-cover"
                        src={`http://localhost:4000/photos/team/${member.photo}`}
                        alt="Profile"
                        layout="fill"
                      />
                    </div>

                    <div className="pt-3">
                      <div className="space-y-1">
                        <h2 className="text-xl md:text-2xl font-bold text-green-500">
                          {member.name}
                        </h2>
                        <p className="text-gray-400">{member.title}</p>
                        <p>
                          <span
                            className={`block overflow-hidden transition-all duration-0 ease-in-out ${
                              !openItems[member._id]
                                ? "max-h-[1000px]"
                                : "max-h-0"
                            }`}
                          >
                            {member.description.substring(0, 100)}
                          </span>
                          <span
                            className={`block overflow-hidden ${
                              openItems[member._id]
                                ? "transition-all duration-1000 ease-in-out max-h-[1000px]"
                                : "max-h-0 transition-all duration-0 ease-in-out"
                            }`}
                          >
                            {member.description}
                          </span>{" "}
                          <button
                            onClick={() => toggleOpen(member._id)}
                            className="text-green-500"
                          >
                            {openItems[member._id]
                              ? "show less"
                              : "read more..."}
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h1>Team members loading...</h1>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
