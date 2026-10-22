import PageBanner from "../components/PageBanner";
import Blog from "../components/Blog";

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Our Blog"
        text="Technology insights, ideas and digital trends from NexaByte Technologies."
        image="banner.jpg"
      />

      <Blog />
    </>
  );
}