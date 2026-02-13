import Header from "./components/shared/Header";
import Hero from "./components/sections/hero/Hero";
import Benefits from "./components/sections/benefits/Benefits";
import About from "./components/sections/about/About";
import Services from "./components/sections/services/Services";
import Testimonials from "./components/sections/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
}