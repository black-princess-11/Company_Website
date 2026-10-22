import About from "../components/About";
import Enterprise from "../components/Enterprise";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
export default function AboutPage() {
  return (
    <>
      <PageBanner
            title="About Us"
            text="Who we are and what we stand for."
            image="banner.jpg"
      />
      <Reveal><About /></Reveal>
      <Reveal><Enterprise /></Reveal>
    </>
  );
}