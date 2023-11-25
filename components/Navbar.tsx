import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between md:px-60 p-5">
      <a href="/" className="hover:opacity-70 transition-opacity duration-300"> {/* Added anchor tag here */}
        <h1 className="text-red-500 text-[45px] font-horror tracking-wider neon-effect">
          Cataclysm
          <span className="text-red-500">.</span>
        </h1>
      </a>
      <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <a 
            key={social.name} 
            href="#" 
            className="hover:opacity-70 transition-opacity duration-300" // Hover effect
          >
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
