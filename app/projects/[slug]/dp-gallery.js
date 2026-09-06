"use client";

import { useState } from "react";

export default function DpGallery({ media, title }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="dp-grid">
        {media.map((src, i) => (
          <div
            key={src}
            className="dp-grid-item"
            onClick={() => setSelected(src)}
          >
            <img src={src} alt={`${title} ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div
        className={`lightbox ${selected ? "active" : ""}`}
        onClick={() => setSelected(null)}
      >
        <button className="close-btn">&times;</button>
        {selected && (
          <div
            className="lightbox-content lightbox-content--no-info"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected} alt={title} />
          </div>
        )}
      </div>
    </>
  );
}
