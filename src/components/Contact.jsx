import { useState, useEffect } from "react";
import { API, DEMO } from "../api";
import "../style_css/contact.css";

const countries = [
  { name: "India", iso: "IN", code: "+91", len: 10, start: "[6-9]" },
  { name: "USA / Canada", iso: "US", code: "+1", len: 10 },
  { name: "UK", iso: "UK", code: "+44", len: 10 },
  { name: "UAE", iso: "AE", code: "+971", len: 9 },
  { name: "Australia", iso: "AU", code: "+61", len: 9 },
  { name: "Singapore", iso: "SG", code: "+65", len: 8 },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [country, setCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");

  // Hide the notice after 5 seconds
  useEffect(() => {
    if (status !== "sent" && status !== "error") return;
    const t = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(t);
  }, [status]);

  const pattern = `${country.start || "[0-9]"}[0-9]{${country.len - 1}}`;

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const body = {
      ...Object.fromEntries(new FormData(form)),
      phone: `${country.code} ${phone}`,
    };

    const done = () => {
      setStatus("sent");
      form.reset();
      setPhone("");
    };

    if (DEMO) {
      setTimeout(done, 600);
      return;
    }

    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      done();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="ct-section" id="contact">
      <div className="ct-left">
        <h2>Let's talk about what you want to <span>accomplish</span></h2>
        <p>Tell us about your idea. We will reply within 24 hours.</p>
        <ul>
          <li>📞 +91 98765 43210</li>
          <li>✉️ hello@nexabyte.com</li>
          <li>📍 123 Tech Park, Sample City, India</li>
        </ul>
      </div>

      <form className="ct-form" onSubmit={submit}>
        <input name="name" placeholder="Your Name" maxLength="60" required />
        <input name="email" type="email" placeholder="Email Address" required />

        <div className="ct-phone">
          <select
            value={country.name}
            onChange={(e) => {
              setCountry(countries.find((c) => c.name === e.target.value));
              setPhone("");
            }}
          >
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.iso} {c.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            inputMode="numeric"
            placeholder={`${country.len}-digit mobile number`}
            value={phone}
            maxLength={country.len}
            pattern={pattern}
            title={`Enter a valid ${country.len}-digit number${country.start ? " starting with 6, 7, 8 or 9" : ""}`}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            required
          />
        </div>

        <select name="type">
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>Cloud and DevOps</option>
          <option>UI/UX Design</option>
          <option>Other</option>
        </select>
        <textarea name="message" rows="4" placeholder="Project description" required></textarea>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && <p className="ct-ok">✅ Message sent. Thank you!</p>}
        {status === "error" && <p className="ct-err">❌ Could not send. Please try again.</p>}
      </form>
    </section>
  );
}