"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { agents } from "@/constants/Agents";
import { useStateContext } from "@/context/StateContext";
import { useRouter } from "next/navigation";

const AgentBar = () => {
  // Get the setSelectedAgent function from the context
  const { setSelectedAgent, selectedAgent } = useStateContext();

  const router = useRouter();

  // Initialize pickState state with an array of 0s, one for each agent
  const [pickState, setPickState] = useState(Array(agents.length).fill(0));

  // Define startIndex and agentsPerPage for pagination
  const [startIndex, setStartIndex] = useState(0);
  const agentsPerPage = 6;

  // Show a subset of agents based on the startIndex and agentsPerPage
  const showAgents = agents.slice(startIndex, startIndex + agentsPerPage);

  // Initialize the time remaining state to 5 seconds
  const [timeRemaining, setTimeRemaining] = useState(5);

  // Set the pickState of the first agent to 1 when the component is mounted
  useEffect(() => {
    setPickState((prevPickState) => {
      const updatedPickState = [...prevPickState];
      updatedPickState[0] = 1;
      return updatedPickState;
    });
  }, [setSelectedAgent]);

  // Function to play a locked sound
  const playLockedSound = () => {
    // Define the path to the locked sound file
    const lockedSound = "/lockedSound.mp3";
    // Create a new Audio object with the specified sound file
    const audio = new Audio(lockedSound);
    // Play the audio file
    audio.play();
  };

  const handleClick = (agent, index) => {
    // Create a copy of pickState with all elements initialized to 0
    const updatedPickState = Array(agents.length).fill(0);

    // Update pickState based on the current state of the clicked agent
    if (pickState[index] === 0) {
      // Set pickState to 1 if it was 0
      updatedPickState[index] = 1;
    } else if (pickState[index] === 1) {
      // Set pickState to 2 if it was 1
      updatedPickState[index] = 2;
      playLockedSound();
    }

    setPickState(updatedPickState);
    setSelectedAgent(agent);

    // Deselect the agent on the third click if it was already selected
    if (pickState[index] === 2) {
      setPickState((prevPickState) => {
        const newPickState = [...prevPickState];
        newPickState[index] = 0;
        return newPickState;
      });
      setSelectedAgent(null);
    }
  };

  // Use effect to handle the countdown logic
  useEffect(() => {
    let interval;

    // Check if any agent is selected and the remaining time is greater than 0
    if (pickState.includes(2) && timeRemaining > 0) {
      // Set up an interval to decrement the time remaining by 1 second every second
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeRemaining === 0) {
      // Redirige a la página "/credits" cuando el tiempo restante llega a 0
      router.push("/credits");
    }

    return () => clearInterval(interval);
  }, [pickState, timeRemaining]);

  // Reset the time remaining to 5 seconds whenever pickState changes
  useEffect(() => {
    setTimeRemaining(5);
  }, [pickState]);

  // Function to handle right arrow click
  const handleRightArrowClick = () => {
    // Calculate the new index for pagination, ensuring it does not exceed the agents array bounds
    const newIndex = Math.min(
      startIndex + agentsPerPage,
      agents.length - agentsPerPage
    );
    // Update the startIndex state to display the next set of agents
    setStartIndex(newIndex);

    // Find the index of the first selected agent (pickState === 1)
    const selectedAgentIndex = pickState.findIndex((state) => state === 1);

    // Select the agent corresponding to the new selected index
    setSelectedAgent(agents[selectedAgentIndex]);
  };

  // Function to handle left arrow click
  const handleLeftArrowClick = () => {
    // Calculate the new index for pagination, ensuring it does not go below zero
    const newIndex = Math.max(startIndex - agentsPerPage, 0);
    // Update the startIndex state to display the previous set of agents
    setStartIndex(newIndex);

    // Find the index of the first selected agent (pickState === 1)
    const selectedAgentIndex = pickState.findIndex((state) => state === 1);

    // Select the agent corresponding to the new selected index
    setSelectedAgent(agents[selectedAgentIndex]);
  };

  return (
    <div className="w-full h-full row-span-1 flex justify-center gap-2 relative">
      {showAgents.map((agent, index) => (
        // Locking Border
        <div
          className={`rounded-sm w-[15%] cursor-pointer brightness-[0.6] hover:brightness-[1] hover:scale-[0.98] ease-in duration-75 h-full p-2 ${
            pickState[index] === 1 && "locking-border brightness-[1]"
          } ${pickState[index] === 2 && "brightness-[1]"} `}
          key={index}
        >
          {/* Agent Container */}
          <div
            className={`relative rounded-sm h-[100%]  ${
              pickState[index] === 1
                ? "border-none bg-gradient-to-b from-[#ABA7AB]/60 to-[#444444]/40"
                : "bg-gradient-to-b from-[#ABA7AB]/60 to-[#444444]/60 border-gray border-[4px]"
            } ${
              pickState[index] === 2 &&
              "bg-gradient-to-b from-[#ABA7AB]/60 to-green/80 border-green border-[4px]"
            }  `}
            onClick={() => handleClick(agent, index)}
          >
            {/* Agent Image */}
            <Image
              src={agent.image}
              width={1000}
              height={1000}
              alt={agent.name}
              className="object-cover w-full h-full object-top"
            />
            {/* Locking or Locked */}
            {pickState[index] > 0 ? (
              <>
                {/* Name */}
                <div className="w-full flex justify-center items-center absolute bottom-[20%]">
                  <h2
                    className={`w-[80%] h-auto p-1 rounded font-sans uppercase font-bold text-2xl text-center leading-6 ${
                      pickState[index] === 2 ? "bg-green" : "bg-red"
                    } text-[#fff]`}
                  >
                    {agent.name}
                  </h2>
                </div>
                {/* Locked / Locking */}
                <div className="w-full flex justify-center items-center absolute bottom-[5%]">
                  <h2
                    className={`w-[50%] p-1 font-serif uppercase text-xs rounded text-center bg-[#ffffffde] ${
                      pickState[index] === 2 ? "text-green" : "text-red"
                    } `}
                  >
                    {pickState[index] === 2 ? "LOCKED" : "LOCK IN"}
                  </h2>
                </div>
              </>
            ) : (
              // Default
              <div
                className={`w-full flex justify-center items-center absolute ${
                  pickState[index] === 2 ? "bottom-[20%]" : "bottom-[10%]"
                } `}
              >
                {/* Name */}
                <h2
                  className={`w-auto h-auto px-1 rounded font-sans font-bold uppercase text-2xl text-center leading-6 ${
                    pickState[index] === 2
                      ? "bg-green text-[#fff]"
                      : "backdrop-blur-[2px]"
                  } `}
                >
                  {agent.name}
                </h2>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      {startIndex > 0 && (
        <div
          className="absolute top-[40%] left-3 rotate-180 hover:bg-[#ABA7AB]/60 rounded-2xl p-1 cursor-pointer"
          onClick={handleLeftArrowClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      )}

      {/* Right Arrow */}
      {startIndex < agents.length - agentsPerPage && (
        <div
          className="absolute top-[40%] right-3 hover:bg-[#ABA7AB]/60 rounded-2xl p-1 cursor-pointer"
          onClick={handleRightArrowClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      )}

      {/* Locked Timer */}
      {pickState.includes(2) && (
        <div className="absolute bottom-[120%] left-[4%]">
          <p className="font-sans text-6xl font-semibold tracking-wide text-[#ffffff]">
            {timeRemaining < 10 ? `0${timeRemaining}` : timeRemaining}
          </p>
        </div>
      )}
    </div>
  );
};

export default AgentBar;
