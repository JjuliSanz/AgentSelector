"use client";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";

const BackgroundImage = () => {
  const { selectedMap } = useStateContext();
  return (
    <Image
      src={selectedMap.fullMapImage}
      alt={selectedMap.name}
      width={1000}
      height={1000}
      className="absolute inset-0 w-full h-full blur-[3px] bg-cover bg-center"
    />
  );
};

export default BackgroundImage;
