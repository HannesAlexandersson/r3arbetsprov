"use client";

import { footerTexts } from "@/lib/texts";
import Image from "next/image";
import { Paragraph } from "../TextSection";

const Footer = () => {
  return (
    <footer className="bg-secondary-background w-full flex flex-col ">
      <div className="w-full flex justify-between px-8 py-8">
        <div className="flex flex-col gap-2 text-primarytext">
          <p className="font-light text-[15px]">Våra Hus</p>
          <p className="font-light text-[15px]">Tillval</p>
          <p className="font-light text-[15px]">Hållbarhet</p>
        </div>
        <div className="max-w-[245px]">
          <Paragraph
            paragraphs={footerTexts.text}
            className="font-light text-[15px]"
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="relative w-full h-40 px-8">
          <Image
            src="/footer.png"
            alt="Logo"
            fill
            className="object-cover px-8"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
