import CTA from "./CTA";

const Hero = () => {
  return (
    <section className="w-full h-full bg-[url(/heroImg.png)] bg-cover bg-center bg-no-repeat">
      <div className="relative overflow-hidden w-full h-screen">
        <div className="w-full h-full flex justify-end items-center">
          <CTA className="mr-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
