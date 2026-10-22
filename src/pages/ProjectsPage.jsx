
import PageBanner from "../components/PageBanner";
import Portfolio from "../components/Portfolio";
import Reveal from "../components/Reveal";

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="Our Projects"
        text="Explore the digital solutions built by NexaByte Technologies."
        image="banner.jpg"
      />

      <Reveal>
        <Portfolio />
      </Reveal>
    </>
  );
}
