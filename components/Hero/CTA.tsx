"use client";
import Button from "@/components/Button/Button";
import { Header, Paragraph } from "@/components/TextSection";
import { ctaTexts } from "@/lib/texts";
import { cn } from "@/utils/utils";

const CTA = ({ className }: { className: string }) => {
  const ctaClicked = () => {
    console.log("CTA clicked");
  };

  return (
    <div className={cn("flex flex-col max-w-[398px] gap-6", className)}>
      <Header
        text={ctaTexts.header}
        className="font-medium text-[34px] leading-none tracking-normal text-primarytext"
      />
      <Paragraph
        paragraphs={ctaTexts.paragraph}
        className="font-light text-[18px] leading-[26px] tracking-normal text-primarytext"
      />
      <Button
        text={ctaTexts.btn}
        onClick={ctaClicked}
        className="bg-primary-background w-[126px] h-10 text-primarytext [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]"
      />
    </div>
  );
};

export default CTA;
