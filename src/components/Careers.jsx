import { useState } from "react";
import { API } from "../api";
import "../style_css/careers.css";

const jobs = [
  { id: 1, title: "QA Automation Engineer", dept: "Engineering", type: "Full Time", exp: "2-4 Years", loc: "Sample City",
    desc: "Build and maintain automated test suites for web and mobile products.",
    skills: ["Selenium", "Cypress", "JavaScript", "API Testing"] },
  { id: 2, title: "React Frontend Developer", dept: "Engineering", type: "Full Time", exp: "1-3 Years", loc: "Remote",
    desc: "Create fast, responsive user interfaces with React.",
    skills: ["React", "CSS", "REST APIs", "Git"] },
  { id: 3, title: "UI/UX Designer", dept: "Design", type: "Full Time", exp: "1-3 Years", loc: "Sample City",
    desc: "Design clean and user-friendly interfaces for our clients.",
    skills: ["Figma", "Prototyping", "Wireframes"] },
  { id: 4, title: "Digital Marketing Intern", dept: "Marketing", type: "Internship", exp: "Fresher", loc: "Remote",
    desc: "Help run SEO and social media campaigns.",
    skills: ["SEO", "Content", "Analytics"] },
];

export default function Careers() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");
  const [job, setJob] = useState(null);
  const [sent, setSent] = useState(false);

  const depts = ["All", ...new Set(jobs.map((j) => j.dept))];
  const list = jobs.filter(
    (j) =>
      (dept === "All" || j.dept === dept) &&
      j.title.toLowerCase().includes(search.toLowerCase())
  );

  const close = () => {
    setJob(null);
    setSent(false);
  };

  const submit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("job", job.title);

        try {
        const res = await fetch(`${API}/api/apply`, { method: "POST", body: data });
        if (!res.ok) throw new Error();
        setSent(true);
        } catch {
        alert("Could not send. Please try again.");
        }
    };

  return (
    <>
         <section className="cr-section" id="careers">
            <h2>Open <span>Positions</span></h2>
            <p className="cr-sub">Join our team and build the future with us.</p>

            <div className="cr-filters">
                <input
                type="text"
                placeholder="Search job title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <select value={dept} onChange={(e) => setDept(e.target.value)}>
                {depts.map((d) => (
                    <option key={d}>{d}</option>
                ))}
                </select>
            </div>

            <div className="cr-grid">
                {list.map((j) => (
                <div className="cr-card" key={j.id}>
                    <span className="cr-dept">{j.dept}</span>
                    <h3>{j.title}</h3>
                    <ul>
                    <li>🕒 {j.type}</li>
                    <li>💼 {j.exp}</li>
                    <li>📍 {j.loc}</li>
                    </ul>
                    <button className="cr-btn" onClick={() => setJob(j)}>View and Apply</button>
                </div>
                ))}
                {list.length === 0 && <p className="cr-empty">No jobs found.</p>}
            </div>

            {job && (
                <div className="cr-overlay" onClick={close}>
                <div className="cr-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="cr-close" onClick={close}>✕</button>

                    <div className="cr-left">
                    <span className="cr-dept">{job.dept}</span>
                    <h3>{job.title}</h3>
                    <p className="cr-meta">{job.type} • {job.exp} • {job.loc}</p>
                    <p>{job.desc}</p>
                    <h4>Key Skills</h4>
                    <div className="cr-skills">
                        {job.skills.map((s) => (
                        <span key={s}>{s}</span>
                        ))}
                    </div>
                    </div>

                    <div className="cr-right">
                    <h3>Apply for this Position</h3>
                    {sent ? (
                        <p className="cr-success">✅ Application received. We will contact you soon.</p>
                    ) : (
                        <form onSubmit={submit}>
                        <input name="name" placeholder="Full Name" required />
                        <input name="email" type="email" placeholder="Email Address" required />
                        <input name="phone" placeholder="Phone Number" required />
                        <textarea name="note" rows="3" placeholder="Short cover note"></textarea>
                        <label>Resume (PDF)</label>
                        <input name="resume" type="file" accept=".pdf" required />
                        <button type="submit" className="cr-btn">Submit Application</button>
                        </form>
                    )}
                    </div>
                </div>
                </div>
            )}
        </section>
    </>
   
  );
}