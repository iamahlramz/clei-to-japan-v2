import { themes, DAYS } from "../data/days";
import TransportGuide from "./TransportGuide";
import TimelineItem from "./TimelineItem";
import TipsBanner from "./TipsBanner";

export default function DayCard({ day, dayIndex, onNextDay }) {
  const t = themes[day.city] || themes.travel;
  const isPlaceholder = day.items.length <= 1 && day.items[0]?.type === "note";
  const isLast = dayIndex >= DAYS.length - 1;
  const nextDay = !isLast ? DAYS[dayIndex + 1] : null;

  return (
    <div className="day-card" key={day.date} style={{ "--card-border": t.border }}>
      <div className="day-card-header" style={{ background: t.header }}>
        <div className="day-card-date">{day.date}</div>
        <h2 className="day-card-title">{day.title}</h2>
        <span className="day-card-badge">{day.badge}</span>
      </div>

      <TransportGuide transport={day.transport} theme={t} />

      {isPlaceholder ? (
        <div className="day-card-empty">
          <span className="day-card-empty-icon">📋</span>
          <p className="day-card-empty-text">{day.items[0].text}</p>
          <p className="day-card-empty-hint">Check the Sapporo suggestions section below!</p>
        </div>
      ) : (
        <div className="day-card-timeline">
          {day.items.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              isLast={i === day.items.length - 1}
            />
          ))}
        </div>
      )}

      <TipsBanner tips={day.tips} />

      {!isLast && nextDay && onNextDay && (
        <button className="next-day-prompt" onClick={onNextDay}>
          Next: {nextDay.title} →
        </button>
      )}
    </div>
  );
}
