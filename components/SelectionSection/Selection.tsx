"use client";

import Button from "@/components/Button/Button";
import Headers from "@/components/TextSection/Header";
import Image from "next/image";
import { SelectionProps } from "./Selection.types";

const Selection: React.FC<SelectionProps> = ({
  title,
  imageSrc,
  btnDescription,
}) => {
  const handleClick = () => {
    console.log(`${btnDescription}  button clicked!`);
  };
  return (
    <div className="relative w-full h-[464px] overflow-hidden">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <Headers text={title} className="text-[24px]" />
        <div className="flex justify-end">
          <Button
            text={btnDescription}
            onClick={handleClick}
            className="w-[136px] h-10 bg-primarytext text-button-background [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]"
          />
        </div>
      </div>
    </div>
  );
};
export default Selection;
