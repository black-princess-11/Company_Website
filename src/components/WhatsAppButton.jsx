import "../style_css/whatsappbutton.css";

export default function WhatsAppButton() {
  const phone = "919876543210";

  const message =
    "Hello NexaByte Technologies, I would like to know more about your services.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/whatsapp/whatsapp.png`}
        alt="WhatsApp"
      />

      <strong>WhatsApp</strong>
    </a>
  );
}