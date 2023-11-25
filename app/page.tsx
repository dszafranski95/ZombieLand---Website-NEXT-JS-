import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/zombie.png')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/skull.png"
          alt="MoustacheMan"
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
        />
      </div>
      <Image
        src="/assets/bloody.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      />

      <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
          <h1 className="text-[50px] text-white max-w-[500px]">
      Surviving the{" "}
      <span className="text-red-500">Zombie Cataclysm</span>
    </h1>
    <p className="text-[16px] text-gray-200 md:text-white-400 mb-10 md:pb-2 max-w-[400px]">
      In a world overrun by the undead, humanity is last hope lies in the digital realm. Join us as we navigate the apocalypse and strive to rebuild civilization.
    </p>


      </div>
    </main>
  );
}
