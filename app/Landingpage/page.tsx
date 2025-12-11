import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { Header, Paragraph } from "@/components/TextSection";
import { heroTexts } from "@/lib/texts";

const Landingpage = () => {
  return (
    <main className="relative flex flex-col h-screen items-center">
      <Navbar />
      <Hero />
      <div className="bg-primary-background w-full  flex items-center justify-center ">
        <div className="py-12">
          <Header
            text={heroTexts.header}
            className="font-medium text-[34px] mb-4"
          />

          <div className="flex  justify-center gap-8 ">
            <div className="flex flex-col gap-6 max-w-[450px]">
              <Paragraph
                paragraphs={heroTexts.paragraphs[0]}
                className="font-light text-lg"
              />
              <Paragraph
                paragraphs={heroTexts.paragraphs[1]}
                className="font-light text-lg"
              />
            </div>
            <div className="flex flex-col gap-6 max-w-[450px]">
              <Paragraph
                paragraphs={heroTexts.paragraphs[2]}
                className="font-light text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landingpage;
