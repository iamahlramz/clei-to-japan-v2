import { useState, useRef, useEffect } from "react";

export default function Toggle({ title, icon, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open, children]);

  return (
    <div className="toggle-section">
      <button
        className={`toggle-header ${open ? "toggle-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="toggle-title-group">
          {icon && <span className="toggle-icon">{icon}</span>}
          <div>
            <span className="toggle-title">{title}</span>
            {subtitle && <span className="toggle-subtitle">{subtitle}</span>}
          </div>
        </div>
        <span className={`toggle-arrow ${open ? "rotated" : ""}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div
        className="toggle-content-wrapper"
        style={{
          maxHeight: open ? height + 2 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="toggle-content">
          {children}
        </div>
      </div>
    </div>
  );
}
