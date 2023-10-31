"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useStateContext } from "@/context/StateContext";

const AgentDesc = () => {
  const { selectedAgent } = useStateContext();
  const [abilitySelected, setAbilitySelected] = useState(null);

  // Function to handle click events for abilities
  const handleClick = (index) => {
    // Check if the clicked ability is already selected
    if (abilitySelected === index) {
      // If the ability is already selected, deselect it
      setAbilitySelected(null);
    } else {
      // If the ability is not selected, select it
      setAbilitySelected(index);
    }
  };

  return (
    <>
      {selectedAgent && (
        <div
          className="col-span-2 h-full mr-6 mt-6 z-50 fadeIn"
          key={selectedAgent.id}
        >
          <div className="flex flex-col gap-[0.3rem]">
            <div className="flex flex-col">
              {/* Agent Role */}
              <h3 className="font-serif font-medium text-base uppercase tracking-[.15em]">
                {selectedAgent.role}
              </h3>
              {/* Agent Name */}
              <h1 className="font-sans font-bold uppercase text-4xl tracking-wide">
                {selectedAgent.name}
              </h1>
            </div>
            {/* Agent Description */}
            <p className="font-sans font-medium text-base">
              {selectedAgent.description}
            </p>

            {/* Abilities Container */}
            <div className="flex h-[50px] w-full gap-3">
              {selectedAgent.abilities.map((ability, index) => (
                // Ability Icon Container
                <div
                  className="w-[50px] p-1 border-gray bg-abilityDark border-2 rounded-sm cursor-pointer hover:brightness-[0.8] hover:scale-[0.95] ease-in duration-75"
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  <Image
                    src={ability.image}
                    width={200}
                    height={200}
                    alt={ability.name}
                    className=""
                  />
                  {/* Arrow */}
                  <div
                    className={`${
                      abilitySelected === index ? "flex" : "hidden"
                    } justify-center mt-1`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down-fill scale-[1.1]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            {/* Ability Desc */}
            {selectedAgent.abilities[abilitySelected] && (
              <div className="flex flex-col py-4 px-6 gap-2 border-gray bg-abilityDark border-2 rounded-sm max-h-[150px] overflow-auto">
                {/* Ability Title */}
                <p className="font-serif font-medium text-base">
                  {selectedAgent.abilities[abilitySelected].title}
                </p>
                {/* Ability Desc */}
                <p className="font-sans text-sm font-medium">
                  {selectedAgent.abilities[abilitySelected].abilityDesc}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AgentDesc;
