import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import DayNav from "./components/DayNav";
import DayCard from "./components/DayCard";
import Toggle from "./components/Toggle";
import { DAYS } from "./data/days";
import { SECTIONS, FLIGHTS } from "./data/sections";
import { SAPPORO, USJ_NOTE } from "./data/sapporo";
import "./App.css";

const PAGES = [
  { id: "itinerary", label: "Itinerary", icon: "📅" },
  { id: "prep", label: "Prep", icon: "📋" },
  { id: "flights", label: "Flights", icon: "✈️" },
  { id: "info", label: "Info", icon: "🇯🇵" },
  { id: "extras", label: "Extras", icon: "⭐" },
];

function getInitialState() {
  const hash = window.location.hash.replace("#", "");
  const dayMatch = hash.match(/^day-(\d+)$/);
  if (dayMatch) {
    const idx = parseInt(dayMatch[1], 10) - 1;
    if (idx >= 0 && idx < DAYS.length) return { page: "itinerary", day: idx };
  }
  const pageMatch = PAGES.find((p) => p.id === hash);
  if (pageMatch) return { page: pageMatch.id, day: 0 };
  return { page: "itinerary", day: 0 };
}

export default function App() {
  const initial = getInitialState();
  const [activePage, setActivePage] = useState(initial.page);
  const [activeDay, setActiveDay] = useState(initial.day);
  const dayCardRef = useRef(null);

  useEffect(() => {
    if (activePage === "itinerary") {
      window.location.hash = `day-${activeDay + 1}`;
    } else {
      window.location.hash = activePage;
    }
  }, [activePage, activeDay]);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      const dayMatch = hash.match(/^day-(\d+)$/);
      if (dayMatch) {
        const idx = parseInt(dayMatch[1], 10) - 1;
        if (idx >= 0 && idx < DAYS.length) {
          setActivePage("itinerary");
          setActiveDay(idx);
        }
        return;
      }
      const pageMatch = PAGES.find((p) => p.id === hash);
      if (pageMatch) setActivePage(pageMatch.id);
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

  // Split sections: prep = predeparture + arrival, info = etiquette + emergency
  const prepSections = SECTIONS.filter((s) => s.id === "predeparture" || s.id === "arrival");
  const infoSections = SECTIONS.filter((s) => s.id === "etiquette" || s.id === "emergency");

  return (
    <div className="app">
      <Header />

      <nav className="page-nav" aria-label="Main sections">
        {PAGES.map((p) => (
          <button
            key={p.id}
            className={`page-nav-tab ${activePage === p.id ? "page-nav-tab-active" : ""}`}
            onClick={() => setActivePage(p.id)}
          >
            <span className="page-nav-icon">{p.icon}</span>
            <span className="page-nav-label">{p.label}</span>
          </button>
        ))}
      </nav>

      <main className="main">
        {activePage === "itinerary" && (
          <>
            <DayNav days={DAYS} activeDay={activeDay} onSelect={handleDaySelect} />
            <div ref={dayCardRef}>
              <DayCard
                key={activeDay}
                day={DAYS[activeDay]}
                dayIndex={activeDay}
                onNextDay={handleNextDay}
              />
            </div>
          </>
        )}

        {activePage === "prep" && (
          <>
            {prepSections.map((section) => (
              <Toggle
                key={section.id}
                title={section.title}
                icon={section.icon}
                subtitle={section.subtitle}
                defaultOpen={section.id === "predeparture"}
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
          </>
        )}

        {activePage === "flights" && (
          <div className="flights-page">
            <h2 className="page-title">Our Flights</h2>
            <p className="page-subtitle">All 5 flights for the trip</p>
            <div className="flights-card">
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
            </div>
          </div>
        )}

        {activePage === "info" && (
          <>
            {infoSections.map((section) => (
              <Toggle
                key={section.id}
                title={section.title}
                icon={section.icon}
                subtitle={section.subtitle}
                defaultOpen={section.id === "etiquette"}
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
          </>
        )}

        {activePage === "extras" && (
          <>
            <Toggle title="Want to Do Universal Studios Instead?" icon="🎢">
              <div className="usj-note">{USJ_NOTE}</div>
            </Toggle>

            <Toggle title="Ideas for Sapporo" icon="❄️" subtitle="Sapporo itinerary c/o Jorell">
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
          </>
        )}

        <footer className="site-footer">
          See you at the airport on March 27!
        </footer>
      </main>
    </div>
  );
}
