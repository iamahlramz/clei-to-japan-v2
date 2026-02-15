import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import DayNav from "./components/DayNav";
import DayCard from "./components/DayCard";
import Toggle from "./components/Toggle";
import { DAYS } from "./data/days";
import { SECTIONS, FLIGHTS } from "./data/sections";
import { SAPPORO, USJ_NOTE } from "./data/sapporo";
import "./App.css";

function getInitialDay() {
  const hash = window.location.hash.replace("#", "");
  const match = hash.match(/^day-(\d+)$/);
  if (match) {
    const idx = parseInt(match[1], 10) - 1;
    if (idx >= 0 && idx < DAYS.length) return idx;
  }
  return 0;
}

export default function App() {
  const [activeDay, setActiveDay] = useState(getInitialDay);
  const dayCardRef = useRef(null);

  useEffect(() => {
    window.location.hash = `day-${activeDay + 1}`;
  }, [activeDay]);

  useEffect(() => {
    const onHash = () => {
      const match = window.location.hash.match(/^#day-(\d+)$/);
      if (match) {
        const idx = parseInt(match[1], 10) - 1;
        if (idx >= 0 && idx < DAYS.length) setActiveDay(idx);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleDaySelect = (i) => {
    setActiveDay(i);
    setTimeout(() => {
      dayCardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const handleNextDay = () => {
    if (activeDay < DAYS.length - 1) {
      handleDaySelect(activeDay + 1);
    }
  };

  return (
    <div className="app">
      <Header />

      <main className="main">
        {/* Pre-departure & Arrival Sections */}
        {SECTIONS.map((section) => (
          <Toggle
            key={section.id}
            title={section.title}
            icon={section.icon}
            subtitle={section.subtitle}
          >
            <div className="checklist">
              {section.content.map((item, i) => (
                <div key={i} className="checklist-item">
                  <span className="checklist-label">{item.label}</span>
                  <span className="checklist-text">{item.text}</span>
                </div>
              ))}
            </div>
          </Toggle>
        ))}

        {/* Flights Overview */}
        <Toggle title="Our Flights" icon="✈️" subtitle="All 5 of our flights">
          <div className="flights-list">
            {FLIGHTS.map((f, i) => (
              <div key={i} className="flight-row">
                <span className="flight-date">{f.date}</span>
                <span className="flight-route">{f.route}</span>
                <span className="flight-code">{f.code}</span>
                <span className="flight-time">{f.time}</span>
              </div>
            ))}
          </div>
        </Toggle>

        {/* Day Navigation */}
        <DayNav days={DAYS} activeDay={activeDay} onSelect={handleDaySelect} />

        {/* Active Day */}
        <div ref={dayCardRef}>
          <DayCard
            key={activeDay}
            day={DAYS[activeDay]}
            dayIndex={activeDay}
            onNextDay={handleNextDay}
          />
        </div>

        {/* USJ Backup */}
        <Toggle title="Want to Do Universal Studios Instead?" icon="🎢">
          <div className="usj-note">{USJ_NOTE}</div>
        </Toggle>

        {/* Sapporo Suggestions */}
        <Toggle title="Ideas for Sapporo" icon="❄️" subtitle="For whoever's planning the Sapporo days">
          <div className="sapporo-grid">
            {SAPPORO.map((group, gi) => (
              <div key={gi} className="sapporo-category">
                <h4 className="sapporo-cat-title">{group.cat}</h4>
                <ul className="sapporo-list">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="sapporo-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Toggle>

        <footer className="site-footer">
          See you at the airport on March 27!
        </footer>
      </main>
    </div>
  );
}
