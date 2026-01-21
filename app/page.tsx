import Header from "./components/shared/Header";
import Hero from "./components/sections/hero/Hero";
import Benefits from "./components/sections/benefits/Benefits";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header />
      <Hero />
      <Benefits />
    </div>
  );
}