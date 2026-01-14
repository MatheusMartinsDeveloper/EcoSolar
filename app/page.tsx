import Header from "./components/shared/Header";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header />
      <Hero />
    </div>
  );
}