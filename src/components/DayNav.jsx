import { useRef, useEffect, useState } from "react";
import { themes } from "../data/days";

const cityEmoji = {
  travel: "✈️",
  osaka: "🌸",
  nara: "🦌",
  sapporo: "❄️",
};

export default function DayNav({ days, activeDay, onSelect }) {
  const navRef = useRef(null);
  const activeRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeDay]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`day-nav-wrapper ${scrolled ? "scrolled" : ""}`} aria-label="Trip days">
      <div className="day-nav" ref={navRef}>
        {days.map((d, i) => {
          const th = themes[d.city] || themes.travel;
          const active = i === activeDay;
          const dayLabel = d.date.includes(",") ? d.date.split(",")[0] : d.date.split("–")[0];
          const dateLabel = d.date.includes(",") ? d.date.split(", ")[1] : d.date;

          return (
            <button
              key={i}
              ref={active ? activeRef : null}
              className={`day-tab ${active ? "day-tab-active" : ""}`}
              onClick={() => onSelect(i)}
              style={{
                "--tab-accent": th.accent,
                "--tab-bg": th.bg,
                "--tab-border": th.border,
              }}
            >
              <span className="day-tab-emoji">{cityEmoji[d.city] || "✈️"}</span>
              <span className="day-tab-day">{dayLabel}</span>
              <span className="day-tab-date">{dateLabel}</span>
            </button>
          );
        })}
      </div>
      <div className="day-progress">Day {activeDay + 1} of {days.length}</div>
    </nav>
  );
}
