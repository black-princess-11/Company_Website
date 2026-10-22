
import { Link, Navigate, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import { getBlogBySlug } from "../components/Blog";
import "../style_css/blog.css";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <PageBanner
        title="Blog Details"
        text="Technology insights and ideas from NexaByte Technologies."
        image="banner.jpg"
      />

      <main className="blog-detail-page">
        <Reveal>
          <article className="blog-detail-article">
            <Link to="/blog" className="blog-back">
              <span aria-hidden="true">←</span> Back to All Articles
            </Link>

            <div className="blog-detail-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/blog/${blog.image}`}
                alt={blog.title}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="blog-detail-body">
              <span className="blog-detail-category">{blog.category}</span>

              <div className="blog-detail-meta">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>

              <h1>{blog.title}</h1>
              <p className="blog-detail-excerpt">{blog.excerpt}</p>

              <div className="blog-detail-content">
                {blog.content.map((paragraph, index) => (
                  <p key={`${blog.slug}-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="blog-detail-footer">
                <p>Want to discuss a technology project with our team?</p>
                <Link to="/contact" className="blog-contact-btn">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>

              <Link to="/blog" className="blog-back blog-back-bottom">
                ← Explore More Articles
              </Link>
            </div>
          </article>
        </Reveal>
      </main>
    </>
  );
}
