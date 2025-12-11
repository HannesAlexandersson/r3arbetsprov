import CTA from "./CTA";

const Hero = () => {
  return (
    <section className="w-full h-full bg-[url(/heroImg.png)] bg-cover bg-center bg-no-repeat">
      <div className="relative overflow-hidden w-full h-screen">
        <div className="w-full h-full flex justify-center items-center md:justify-end ">
          <CTA className="mr-0 px-4 md:px-0 md:mr-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
