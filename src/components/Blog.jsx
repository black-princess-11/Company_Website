
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../style_css/blog.css";

const blogs = [
  {
    id: 1,
    slug: "ai-transforming-businesses",
    title: "How AI Is Transforming Modern Businesses",
    category: "Artificial Intelligence",
    date: "October 5, 2026",
    readTime: "5 min read",
    image: "AI.jpg",
    excerpt:
      "Discover how artificial intelligence is helping businesses automate processes, improve decisions and create better customer experiences.",
    content: [
      "Artificial Intelligence is becoming an important part of modern business. Companies are using AI for automation, customer support, data analysis, fraud detection and personalized experiences.",
      "AI-powered tools can help businesses identify patterns, reduce repetitive work and make better-informed decisions. The most useful implementations start with a clear business problem and measurable goals.",
      "Before adopting AI, businesses should consider data quality, privacy, security and how AI-assisted decisions will be reviewed by people.",
    ],
  },
  {
    id: 2,
    slug: "modern-business-website",
    title: "Why Every Business Needs a Modern Website",
    category: "Web Development",
    date: "September 28, 2026",
    readTime: "4 min read",
    image: "webdevelopment.jpg",
    excerpt:
      "A professional website is more than an online presence. Learn how modern websites help businesses build trust and generate growth.",
    content: [
      "A modern website is often the first interaction customers have with a company. A fast, responsive and user-friendly website improves credibility and communicates services clearly.",
      "Responsive layouts help visitors navigate your website on phones, tablets and desktop computers. Clear content, accessible design and intuitive navigation also improve the overall experience.",
      "Regular updates, performance checks and security improvements help keep a website reliable as your business grows.",
    ],
  },
  {
    id: 3,
    slug: "cloud-computing-guide",
    title: "Cloud Computing: A Simple Guide for Businesses",
    category: "Cloud",
    date: "September 20, 2026",
    readTime: "6 min read",
    image: "cloudcomputing.jpg",
    excerpt:
      "Understand the benefits of cloud computing and why businesses are moving their applications and infrastructure to the cloud.",
    content: [
      "Cloud computing allows businesses to access computing resources without maintaining all infrastructure themselves. It can provide flexibility, scalability and convenient application deployment.",
      "Organizations can choose cloud services according to their workloads, security requirements, budget and technical needs.",
      "A successful cloud strategy should include access controls, backups, monitoring, cost management and a plan for recovery if services become unavailable.",
    ],
  },
  {
    id: 4,
    slug: "react-vs-traditional-development",
    title: "React vs Traditional Web Development",
    category: "Technology",
    date: "September 14, 2026",
    readTime: "5 min read",
    image: "reactjs.jpg",
    excerpt:
      "Learn why modern JavaScript frameworks such as React are widely used to build interactive web applications.",
    content: [
      "React provides a component-based approach to building user interfaces. Developers can create reusable components and manage changing application state efficiently.",
      "Traditional websites can work very well for content-focused pages, while React is especially useful when an application needs interactive interfaces and reusable UI components.",
      "The right technology depends on the project's requirements, performance goals, team skills and long-term maintenance needs.",
    ],
  },
  {
    id: 5,
    slug: "protect-business-cyber-threats",
    title: "How to Protect Your Business From Cyber Threats",
    category: "Cyber Security",
    date: "September 8, 2026",
    readTime: "7 min read",
    image: "cyber.jpg",
    excerpt:
      "Learn some important cybersecurity practices that every organization should follow to protect its digital assets.",
    content: [
      "Cybersecurity starts with basic practices such as strong passwords, multi-factor authentication, access control, software updates and reliable backups.",
      "Businesses should give employees only the access they need, train teams to recognize suspicious messages and regularly review application permissions.",
      "Monitoring systems, testing recovery procedures and responding quickly to incidents can help reduce the impact of security problems.",
    ],
  },
  {
    id: 6,
    slug: "future-mobile-app-development",
    title: "The Future of Mobile App Development",
    category: "Mobile",
    date: "September 1, 2026",
    readTime: "5 min read",
    image: "appdevp.jpg",
    excerpt:
      "Explore the technologies and trends shaping the future of mobile application development.",
    content: [
      "Mobile applications continue to evolve through improved user experiences, cloud integration, AI capabilities and cross-platform development.",
      "Technologies such as Flutter and React Native can help teams build applications for multiple platforms while sharing parts of their codebase.",
      "Successful mobile apps still depend on usability, accessibility, performance, testing and ongoing maintenance.",
    ],
  },
];

const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

function BlogImage({ image, title, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`blog-image-fallback ${className}`} role="img" aria-label={title}>
        <span>{title}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={`${process.env.PUBLIC_URL}/images/blog/${image}`}
      alt={title}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;

      const matchesSearch =
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="blog-section">
      <div className="blog-heading">
        <span className="blog-badge">OUR BLOG</span>

        <h2>
          Latest <span>Insights</span>
        </h2>

        <p>
          Explore technology insights, business ideas and digital trends from
          the NexaByte Technologies team.
        </p>
      </div>

      <div className="blog-controls">
        <div className="blog-categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category
                  ? "blog-category active"
                  : "blog-category"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <input
          type="search"
          placeholder="Search articles..."
          aria-label="Search blog articles"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="blog-search"
        />
      </div>

      <div className="blog-grid">
        {filteredBlogs.map((blog) => (
          <article className="blog-card" key={blog.id}>
            <div className="blog-image">
              <BlogImage image={blog.image} title={blog.title} />
              <span>{blog.category}</span>
            </div>

            <div className="blog-content">
              <div className="blog-meta">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>

              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>

              <Link className="blog-read" to={`/blog/${blog.slug}`}>
                Read Article <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="blog-empty">
          <h3>No articles found</h3>
          <p>Try another search or category.</p>
          <button
            type="button"
            className="blog-reset"
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
          >
            Show All Articles
          </button>
        </div>
      )}
    </section>
  );
}

export { blogs };
