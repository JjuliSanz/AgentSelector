"use client";
import Image from "next/image";
import { useStateContext } from "@/context/StateContext";

const Agent = () => {
  const { selectedAgent } = useStateContext();

  return (
    <>
      {selectedAgent && (
        <div
          key={selectedAgent.id}
          className={`col-start-3 col-span-2 h-full relative fadeIn`}
        >
          <Image
            src={selectedAgent.image}
            alt={selectedAgent.name}
            width={1000}
            height={1000}
            className={`w-full h-auto object-cover absolute scale-[1]`}
          />
        </div>
      )}
    </>
  );
};

export default Agent;
