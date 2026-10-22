import Team from "../components/Team";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Our Team"
        text="Meet the people behind NexaByte Technologies."
        image="banner.jpg"
      />
      <Reveal>
        
        <Team />
      </Reveal>
    </>
  );
}
