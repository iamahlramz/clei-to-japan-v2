import { useState, useRef } from "react";

const BASE = import.meta.env.BASE_URL;

export default function AirbnbCard({ option }) {
  const [imgIdx, setImgIdx] = useState(0);
  const scrollRef = useRef(null);

  const imgSrc = (file) => `${BASE}airbnb/${option.folder}/${file}`;

  const scrollTo = (idx) => {
    setImgIdx(idx);
    const container = scrollRef.current;
    if (container) {
      const child = container.children[idx];
      if (child) {
        child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  };

  const prev = () => scrollTo(Math.max(0, imgIdx - 1));
  const next = () => scrollTo(Math.min(option.images.length - 1, imgIdx + 1));

  return (
    <div className="airbnb-card">
      <div className="airbnb-card-gallery">
        <div className="airbnb-card-images" ref={scrollRef}>
          {option.images.map((file, i) => (
            <img
              key={i}
              src={imgSrc(file)}
              alt={`${option.name} photo ${i + 1}`}
              className="airbnb-card-img"
              loading="lazy"
            />
          ))}
        </div>
        {option.images.length > 1 && (
          <>
            <button
              className="airbnb-gallery-btn airbnb-gallery-prev"
              onClick={prev}
              disabled={imgIdx === 0}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              className="airbnb-gallery-btn airbnb-gallery-next"
              onClick={next}
              disabled={imgIdx === option.images.length - 1}
              aria-label="Next photo"
            >
              ›
            </button>
            <div className="airbnb-gallery-dots">
              {option.images.map((_, i) => (
                <button
                  key={i}
                  className={`airbnb-gallery-dot ${i === imgIdx ? "active" : ""}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="airbnb-card-body">
        <div className="airbnb-card-header">
          <span className="airbnb-card-option">Option {option.id}</span>
          <span className="airbnb-card-rating">
            ★ {option.rating} ({option.reviews})
          </span>
        </div>
        <h4 className="airbnb-card-name">{option.name}</h4>
        <p className="airbnb-card-subtitle">{option.subtitle}</p>
        <p className="airbnb-card-location">{option.location}</p>
        <p className="airbnb-card-guests">{option.guests} guests max</p>

        <ul className="airbnb-card-highlights">
          {option.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <a
          href={option.url}
          target="_blank"
          rel="noopener noreferrer"
          className="airbnb-card-link"
        >
          View on Airbnb ↗
        </a>
      </div>
    </div>
  );
}
