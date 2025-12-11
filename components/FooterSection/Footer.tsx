"use client";

import { footerTexts } from "@/lib/texts";
import Image from "next/image";
import { Paragraph } from "../TextSection";

const Footer = () => {
  return (
    <footer className="bg-secondary-background w-full flex flex-col ">
      <div className="w-full flex flex-col md:flex-row justify-between px-8 py-8">
        <div className="flex justify-center md:justify-start md:flex-col gap-2 text-primarytext mb-4 md:mb-0">
          <p className="font-light text-lg md:text-[15px] hover:text-link-hover">
            Våra Hus
          </p>
          <p className="font-light text-lg md:text-[15px] hover:text-link-hover">
            Tillval
          </p>
          <p className="font-light text-lg md:text-[15px] hover:text-link-hover">
            Hållbarhet
          </p>
        </div>
        <div className="max-w-[245px]">
          <Paragraph
            paragraphs={footerTexts.text}
            className="font-light text-[15px]"
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="relative w-full h-15 md:h-40 px-1 md:px-8">
          <Image
            src="/footer.png"
            alt="Logo"
            fill
            className="object-cover px-1 md:px-8"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
