import Contact from "../components/Contact";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        text="Let's talk about what you want to accomplish."
        image="banner.jpg"
      />
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
