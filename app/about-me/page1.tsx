import ServiceSlider from '@/components/ServiceSlider';
import Image from 'next/image';
import React from 'react';
import Particle from "@/components/Particle";


const Page = () => {
  return (
    <div className='flex items-center h-screen overflow-hidden bg-cover bg-[url("/assets/zombied.png")]'>
            <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
        <div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0'>
        <h1 className="text-[50px] text-white font-semibold">
    Survival Arsenal<span className="text-red-500">.</span>
</h1>
<p className="max-w-[350px] text-[16px] text-gray-200 md:text-white-400">
    In the face of the undead apocalypse, it's not just about brute strength. My skills are a blend of strategy, adaptability, and resilience. From fortifying defenses to deciphering the undead's patterns, I've honed my abilities to face the cataclysm.
</p>

        </div>
        <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75'>
      <Image
      src="/assets/bulb.png"
      alt='bulb'
      width={260}
      height={260}
      className='w-full h-full hidden md:block'
      />
        </div>
        <ServiceSlider />
    </div>
  )
}

export default Page;
