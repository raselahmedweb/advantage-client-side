"use client";
import { useEffect, useState } from "react";
import Container from "@/components/pages/container";
import Image from "next/image";
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
        <div className="m-auto">
          <h2 className="text-xl md:text-3xl font-bold md:text-center">Advantage Team</h2>
          <div className="mt-3 border-t border-2 border-yellow-400 mx-0 md:mx-auto w-24"></div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start">
          {teamMember ? (
            teamMember.map((member, index) => {
              return (
                <div
                  key={index}
                  className="pe-2 text-start md:pe-5 mb-5 w-1/2 xl:w-1/3 2xl:w-1/4"
                >
                  <div className="rounded shadow-lg z-50">
                    <div className="relative overflow-hidden w-full h-32 sm:h-40 md:h-64">
                      <Image
                        className="object-cover"
                        src={`https://advantage-server-side.onrender.com/photos/team/${member.photo}`}
                        alt="Profile"
                        layout="fill"
                      />
                    </div>

                    <div className="pt-3">
                      <div className="space-y-1">
                        <h2 className="text-md md:text-2xl font-bold text-green-500">
                          {member.name}
                        </h2>
                        <p className="text-gray-400 text-sm md:text-lg">{member.title}</p>
                        <p>
                        <span
  className={`text-sm md:text-base block overflow-hidden transition-all duration-0 ease-in-out ${
    !openItems[member._id] ? "max-h-[1000px]" : "max-h-0"
  }`}
>
  {openItems[member._id]
    ? member.description // Show full content if the item is open
    : (typeof window !== "undefined" && window.innerWidth < 768)
    ? member.description.substring(0, 50)
    : member.description.substring(0, 100)}
</span>

                          <span
                            className={`block overflow-hidden text-sm md:text-base ${
                              openItems[member._id]
                                ? "transition-all duration-1000 ease-in-out max-h-[1000px]"
                                : "max-h-0 transition-all duration-0 ease-in-out text-sm md:text-base"
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
