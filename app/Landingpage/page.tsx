import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

const Landingpage = () => {
  return (
    <main className="relative flex flex-col h-screen items-center">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Landingpage;
