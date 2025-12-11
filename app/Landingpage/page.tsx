import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { Header, Paragraph } from "@/components/TextSection";
import { heroTexts } from "@/lib/texts";

const Landingpage = () => {
  return (
    <main className="relative flex flex-col h-screen items-center">
      <Navbar />
      <Hero />
      <div className="bg-primary-background w-full h-[471px] flex flex-col">
        <Header text={heroTexts.header} className="font-medium text-[34px]" />
        <div className="flex  justify-center">
          <div className="flex flex-col gap-6">
            <Paragraph
              paragraphs={heroTexts.paragraphs[0]}
              className="font-light text-lg"
            />
            <Paragraph
              paragraphs={heroTexts.paragraphs[1]}
              className="font-light text-lg"
            />
          </div>
          <Paragraph
            paragraphs={heroTexts.paragraphs[2]}
            className="font-light text-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default Landingpage;
