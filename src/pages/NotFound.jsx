import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section style={{ padding: "120px 8%", textAlign: "center" }}>
      <h1 style={{ fontSize: "4rem" }}>404</h1>
      <p style={{ color: "var(--muted)", margin: "10px 0 24px" }}>
        This page does not exist.
      </p>
      <Link to="/" className="btn primary">Back to Home</Link>
    </section>
  );
}