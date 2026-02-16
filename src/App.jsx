import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import DayNav from "./components/DayNav";
import DayCard from "./components/DayCard";
import Toggle from "./components/Toggle";
import { DAYS } from "./data/days";
import { SECTIONS } from "./data/sections";
import { FLIGHTS, FLIGHT_GUIDES } from "./data/flights";
import FlightLeg from "./components/FlightLeg";
import { SAPPORO, USJ_NOTE } from "./data/sapporo";
import { CHECKLIST } from "./data/checklist";
import ChecklistSection from "./components/ChecklistSection";
import { SHOPPING, SHOPPING_TIPS } from "./data/shopping";
import { AIRBNB_OPTIONS } from "./data/airbnb";
import AirbnbCard from "./components/AirbnbCard";
import { STAY } from "./data/stay";
import "./App.css";

const BASE = import.meta.env.BASE_URL;

const PAGES = [
  { id: "itinerary", label: "Itinerary", icon: "📅" },
  { id: "stay", label: "Stay", icon: "🏠" },
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

        {activePage === "stay" && (
          <div className="stay-page">
            <h2 className="page-title">Our Osaka Home Base</h2>
            <p className="page-subtitle">{STAY.name} — {STAY.nights}</p>

            <div className="stay-hero-card">
              <div className="stay-gallery">
                <div className="stay-gallery-scroll">
                  {STAY.images.map((file, i) => (
                    <img
                      key={i}
                      src={`${BASE}airbnb/${STAY.folder}/${file}`}
                      alt={`${STAY.name} photo ${i + 1}`}
                      className="stay-gallery-img"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <div className="stay-hero-body">
                <div className="stay-hero-rating">
                  ★ {STAY.rating} ({STAY.reviews} reviews) · {STAY.guests} guests max
                </div>
                <h3 className="stay-hero-name">{STAY.name}</h3>
                <p className="stay-hero-subtitle">{STAY.subtitle}</p>
                <p className="stay-hero-location">{STAY.location}</p>
                <p className="stay-hero-station">{STAY.station}</p>
                <a
                  href={STAY.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stay-hero-link"
                >
                  View on Airbnb ↗
                </a>
              </div>
            </div>

            <Toggle title="Why We Chose This" icon="💡" subtitle="Location, access, and reliability" defaultOpen>
              <ul className="stay-reasons">
                {STAY.whyWeChoseIt.map((reason, i) => (
                  <li key={i} className="stay-reason">{reason}</li>
                ))}
              </ul>
            </Toggle>

            <Toggle title="Check-in & Check-out" icon="🔑" subtitle="Arrival evening, early morning departure" defaultOpen>
              <div className="stay-details-grid">
                {STAY.checkInOut.map((item, i) => (
                  <div key={i} className="stay-detail-card">
                    <span className="stay-detail-icon">{item.icon}</span>
                    <div>
                      <div className="stay-detail-label">{item.label}</div>
                      <div className="stay-detail-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="stay-notes">
                {STAY.importantNotes.map((note, i) => (
                  <p key={i} className="stay-note">{note}</p>
                ))}
              </div>
            </Toggle>

            <Toggle title="Getting There from KIX" icon="🚃" subtitle={`${STAY.gettingThere.totalTime}, ${STAY.gettingThere.totalCost}`}>
              <div className="stay-directions">
                {STAY.gettingThere.steps.map((s, i) => (
                  <div key={i} className="stay-direction-step">
                    <span className="stay-step-num">{s.step}</span>
                    <span className="stay-step-text">{s.text}</span>
                  </div>
                ))}
                <p className="stay-direction-tip">{STAY.gettingThere.tip}</p>
              </div>
            </Toggle>

            <Toggle title="Quick Routes from Home Base" icon="🗺️" subtitle="Getting to key destinations">
              <div className="stay-routes">
                {STAY.quickRoutes.map((r, i) => (
                  <div key={i} className="stay-route">
                    <div className="stay-route-dest">{r.destination}</div>
                    <div className="stay-route-detail">{r.route}</div>
                    <div className="stay-route-meta">
                      <span>{r.time}</span>
                      <span>{r.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Toggle>

            <Toggle title="What's Nearby" icon="📍" subtitle="Walking distance essentials">
              <div className="stay-nearby">
                {STAY.nearby.map((place, i) => (
                  <div key={i} className="stay-nearby-item">
                    <span className="stay-nearby-icon">{place.icon}</span>
                    <span className="stay-nearby-name">{place.name}</span>
                    <span className="stay-nearby-dist">{place.distance}</span>
                  </div>
                ))}
              </div>
            </Toggle>

            <Toggle title="House Rules" icon="📜" subtitle="Please follow these during our stay">
              <div className="stay-rules">
                {STAY.houseRules.map((r, i) => (
                  <div key={i} className="stay-rule">
                    <span className="stay-rule-icon">{r.icon}</span>
                    <div>
                      <div className="stay-rule-title">{r.rule}</div>
                      <div className="stay-rule-detail">{r.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Toggle>

            <Toggle title="Highlights & Amenities" icon="✨">
              <ul className="stay-highlights">
                {STAY.highlights.map((h, i) => (
                  <li key={i} className="stay-highlight">{h}</li>
                ))}
              </ul>
            </Toggle>

            <Toggle title="Other Options We Considered" icon="🏘️" subtitle="6 Airbnb listings we compared">
              <div className="airbnb-section">
                {AIRBNB_OPTIONS.map((option) => (
                  <AirbnbCard key={option.id} option={option} />
                ))}
              </div>
            </Toggle>
          </div>
        )}

        {activePage === "prep" && (
          <>
            <Toggle title="Trip Checklist" icon="✅" subtitle="Tap to check off as you go" defaultOpen>
              <ChecklistSection phases={CHECKLIST} />
            </Toggle>
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
                      {item.links && (
                        <span className="checklist-links">
                          {item.links.map((link, li) => (
                            <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="checklist-link">
                              {link.text} ↗
                            </a>
                          ))}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Toggle>
            ))}
          </>
        )}

        {activePage === "flights" && (
          <div className="flights-page">
            <h2 className="page-title">Flight Guide</h2>
            <p className="page-subtitle">Step-by-step for every flight and connection</p>
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
            {FLIGHT_GUIDES.map((guide) => (
              <Toggle
                key={guide.id}
                title={guide.title}
                icon={guide.icon}
                subtitle={guide.subtitle}
              >
                <FlightLeg guide={guide} />
              </Toggle>
            ))}
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
                      {item.links && (
                        <span className="checklist-links">
                          {item.links.map((link, li) => (
                            <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="checklist-link">
                              {link.text} ↗
                            </a>
                          ))}
                        </span>
                      )}
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
              <div className="usj-note">
                <p>{USJ_NOTE.text}</p>
                {USJ_NOTE.links && (
                  <span className="checklist-links">
                    {USJ_NOTE.links.map((link, li) => (
                      <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="checklist-link">
                        {link.text} ↗
                      </a>
                    ))}
                  </span>
                )}
              </div>
            </Toggle>

            <Toggle title="Shopping Guide" icon="🛍️" subtitle="Outlets, malls, and where to find them" defaultOpen>
              <div className="shopping-guide">
                {SHOPPING.map((region, ri) => (
                  <div key={ri} className="shopping-region">
                    <h4 className="shopping-region-title">{region.region}</h4>
                    {region.spots.map((spot, si) => (
                      <div key={si} className="shopping-spot">
                        <div className="shopping-spot-name">{spot.name}</div>
                        <p className="shopping-spot-desc">{spot.desc}</p>
                        <div className="shopping-spot-meta">
                          <span className="shopping-meta-item"><strong>Access:</strong> {spot.access}</span>
                          <span className="shopping-meta-item"><strong>Hours:</strong> {spot.hours}</span>
                          <span className="shopping-meta-item"><strong>Time needed:</strong> {spot.timeNeeded}</span>
                        </div>
                        <div className="shopping-spot-fit">
                          <strong>When to go:</strong> {spot.itineraryFit}
                        </div>
                        {spot.links && (
                          <span className="item-links">
                            {spot.links.map((link, li) => (
                              <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="item-link">
                                {link.text} ↗
                              </a>
                            ))}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
                <div className="shopping-tips">
                  <h4 className="shopping-tips-title">Tax-Free & Shopping Tips</h4>
                  <ul className="shopping-tips-list">
                    {SHOPPING_TIPS.map((tip, i) => (
                      <li key={i} className="shopping-tips-item">{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
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
                    {group.links && (
                      <span className="checklist-links">
                        {group.links.map((link, li) => (
                          <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="checklist-link">
                            {link.text} ↗
                          </a>
                        ))}
                      </span>
                    )}
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
