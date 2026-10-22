import Hero from "../components/Hero";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Reveal from "../components/Reveal";
import Portfolio from "../components/Portfolio";
export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Reviews />
      </Reveal>
      <Reveal>
        <Portfolio />
      </Reveal>
    </>
  );
}
