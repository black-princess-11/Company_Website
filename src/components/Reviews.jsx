import "../style_css/reviews.css";

const reviews = [
  { name: "Rahul Mehta", role: "CEO, SampleCorp", text: "They delivered our web portal on time and the quality was excellent." },
  { name: "Priya Shah", role: "Founder, DemoStore", text: "Great communication and a very clean design. Our sales went up." },
  { name: "Amit Patel", role: "CTO, TestSoft", text: "Reliable team. The cloud migration was smooth with zero downtime." },
];

export default function Reviews() {
  return (
    <section className="rv-section" id="reviews">
      <h2>What Our <span>Clients Say</span></h2>
      <p className="rv-sub">Real feedback from businesses we have worked with.</p>

      <div className="rv-grid">
        {reviews.map((r) => (
          <div className="rv-card" key={r.name}>
            <div className="rv-stars">★★★★★</div>
            <p className="rv-text">"{r.text}"</p>
            <div className="rv-user">
              <div className="rv-avatar">{r.name[0]}</div>
              <div>
                <b>{r.name}</b>
                <span>{r.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}