import Careers from "../components/Careers";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
export default function CareersPage() {
  return (
    <>
      <PageBanner
        title="Careers"
        text="Join our team and build the future with us."
        image="banner.jpg"
      />
      <Reveal>
        <Careers />
      </Reveal>
    </>
  );
}
