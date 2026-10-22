import { useState } from "react";
import "../style_css/faq.css";

const faqs = [
  { q: "How long does a website project take?", a: "A standard business website takes 3 to 6 weeks. Larger projects take longer." },
  { q: "Do you provide support after launch?", a: "Yes. We offer maintenance and support plans after delivery." },
  { q: "Can you build a mobile app too?", a: "Yes. We build Android and iOS apps using Flutter and React Native." },
  { q: "How much does a project cost?", a: "It depends on features and size. Send us your requirements for a free quote." },
  { q: "Will my website be secure?", a: "Yes. We follow security best practices and use HTTPS and safe coding." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="fq-section" id="faq">
      <h2>Frequently Asked <span>Questions</span></h2>
      <p className="fq-sub">Quick answers to common questions.</p>

      <div className="fq-list">
        {faqs.map((f, i) => (
          <div className={`fq-item ${open === i ? "active" : ""}`} key={f.q}>
            <button className="fq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}
              <span>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <p className="fq-a">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}