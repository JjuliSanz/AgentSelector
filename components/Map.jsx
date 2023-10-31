"use client";
import Image from "next/image";
import MapSelector from "./MapSelector";
import { useDisclosure } from "@nextui-org/react";
import { useStateContext } from "@/context/StateContext";

const Map = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { selectedMap } = useStateContext();

  return (
    <>
      <div className="col-span-2 h-48 m-6 relative cursor-pointer hover:brightness-[0.8] hover:scale-[0.95] ease-in duration-75 fadeIn" onClick={onOpen}>
        {/* Map Image */}
        <Image
          src={selectedMap.miniMapImage}
          alt={selectedMap.name}
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full bg-cover bg-center rounded"
        />
        <div
          className={`w-full h-full flex items-end justify-center`}         
        >
          {/* Map Name */}
          <span className='w-full h-auto p-[2px] text-center backdrop-blur-[2px] font-sans font-bold uppercase text-2xl flex items-center justify-center'>
            {selectedMap.name}
          </span>
        </div>
      </div>

      {/* Map Selector Modal */}
      {isOpen && (
        <MapSelector
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
        />
      )}
    </>
  );
};

export default Map;
