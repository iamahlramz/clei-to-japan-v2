import { typeColors } from "../data/days";
import FoodCard from "./FoodCard";

export default function TimelineItem({ item, isLast }) {
  const color = typeColors[item.type] || "#64748B";

  return (
    <div className={`timeline-item ${isLast ? "" : "timeline-item-border"}`}>
      <div className="timeline-dot" style={{ background: color }} />
      <div className="timeline-content">
        <div className="timeline-row">
          <span className="timeline-icon">{item.icon}</span>
          <div className="timeline-details">
            {item.time && (
              <span className="timeline-time" style={{ color }}>{item.time}</span>
            )}
            <p className="timeline-text">{item.text}</p>
            {item.links && (
              <span className="item-links">
                {item.links.map((link, li) => (
                  <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="item-link">
                    {link.text} ↗
                  </a>
                ))}
              </span>
            )}
          </div>
        </div>
        {item.food && (
          <div className="timeline-food">
            <div className="timeline-food-label">What's good nearby</div>
            {item.food.map((f, fi) => (
              <FoodCard key={fi} food={f} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
