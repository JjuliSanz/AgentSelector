import Agent from "@/components/Agent";
import AgentBar from "@/components/AgentBar";
import AgentDesc from "@/components/AgentDesc";
import BackgroundImage from "@/components/BackgroundImage";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main className="h-screen w-full relative grid grid-rows-3 overflow-hidden">
      <BackgroundImage />
      <div className="h-[60%] w-full grid grid-cols-6 row-span-2 gap-4">
        <Map />
        <Agent />
        <AgentDesc />
      </div>
      <AgentBar/>
    </main>
  );
}
