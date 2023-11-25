import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-cover bg-[url('/assets/monster.png')]">

      <div className="flex flex-col gap-3">
      <h1 className="text-[50px] text-white font-semibold">
    Chronicles of the Undead<span className="text-red-500">.</span>
</h1>
<p className="max-w-[400px] text-[16px] text-gray-200 md:text-white-400">
    In a world consumed by darkness, where the undead roam and humanity is on the brink of extinction, I document the last remnants of civilization. Witness the tales of despair, hope, and survival in my chronicles of the apocalypse.
</p>
      </div>
      <ProjectSlider /> 
    </div>
  );
};

export default Page;
