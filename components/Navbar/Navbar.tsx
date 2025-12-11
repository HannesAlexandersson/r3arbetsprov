"use client";
import { cn } from "@/utils/utils";
import Image from "next/image";

const Navbar = () => {
  const navbarClick = () => {
    console.log("Navbar button clicked");
  };
  return (
    <nav className="absolute w-full bg-none flex items-center justify-between p-8">
      <Image src="/logo.png" alt="Logo" width={128} height={34} />
      <div className="flex flex-col gap-1">
        <button onClick={navbarClick} className="flex flex-col gap-1">
          <span className="block h-0.5 w-5 bg-primarytext rounded"></span>
          <span className="block h-0.5 w-5 bg-primarytext rounded"></span>
          <span className="block h-0.5 w-5 bg-primarytext rounded"></span>
          <span className="block h-0.5 w-5 bg-primarytext rounded"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
