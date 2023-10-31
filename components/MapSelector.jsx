"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody
} from "@nextui-org/react";
import { maps } from "@/constants/Maps";
import Image from "next/image";
import { useStateContext } from "@/context/StateContext";

const MapSelector = ({ isOpen, onOpen, onOpenChange }) => {
  const { setSelectedMap } = useStateContext();

  const handleClick = (map) => {
    setSelectedMap(map);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        className="bg-[#292929]/80"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Select the map
              </ModalHeader>
              <ModalBody className="flex flex-row flex-wrap justify-center">
                {maps.map((map, index) => (
                  <div
                    className="w-[200px] rounded border-gray border-3 hover:scale-[1.07] ease-in duration-75 cursor-pointer relative"
                    key={index}
                    onClick={() => handleClick(map)}
                  >
                    <Image
                      src={map.fullMapImage}
                      alt={map.name}
                      width={500}
                      height={500}
                      className="object-cover object-center"
                    />
                    <div
                      className={`w-full h-full flex items-end justify-center absolute top-0`}
                    >
                      {/* Map Name */}
                      <span className="w-full h-auto p-1 text-center font-sans font-bold uppercase text-small flex items-center justify-center">
                        {map.name}
                      </span>
                    </div>
                  </div>
                ))}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default MapSelector;
