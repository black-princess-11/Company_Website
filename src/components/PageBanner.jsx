
import "../style_css/pagebanner.css";

export default function PageBanner({ title, text, image }) {
  const style = image
    ? {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner/${image})`,
      }
    : undefined;

  return (
    <header
      className={`pb-banner ${image ? "has-img" : ""}`}
      style={style}
    >
      <div className="pb-overlay"></div>

      <div className="pb-content">
        

        <h1>{title}</h1>


        
      </div>
    </header>
  );
}