import Faq from "../components/Faq";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
export default function FaqPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        text="Quick answers to common questions."
        image="banner.jpg"
      />
      <Reveal>
        <Faq />
      </Reveal>
    </>
  );
}
