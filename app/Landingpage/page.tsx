import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import SelectionSection from "@/components/SelectionSection/SelectionSection";
import { Header, Paragraph } from "@/components/TextSection";
import { heroTexts } from "@/lib/texts";

const Landingpage = () => {
  return (
    <main className="relative flex flex-col items-center">
      <Hero />
      <div className="bg-primary-background w-full  flex items-center justify-center py-12 ">
        <div className="py-6 md:py-12 px-2 md:px-0">
          <Header
            text={heroTexts.header}
            className="font-medium text-4xl md:text-[34px] mb-4"
          />

          <div className="flex flex-col md:flex-row  justify-center gap-8 ">
            <div className="flex flex-col gap-6 max-w-[450px]">
              <Paragraph
                paragraphs={heroTexts.paragraphs[0]}
                className="font-light text-xl md:text-lg"
              />
              <Paragraph
                paragraphs={heroTexts.paragraphs[1]}
                className="font-light text-xl md:text-lg"
              />
            </div>
            <div className="flex flex-col gap-6 max-w-[450px]">
              <Paragraph
                paragraphs={heroTexts.paragraphs[2]}
                className="font-light text-xl md:text-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <SelectionSection />
    </main>
  );
};

export default Landingpage;
