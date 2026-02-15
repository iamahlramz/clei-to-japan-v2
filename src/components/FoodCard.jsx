export default function FoodCard({ food }) {
  return (
    <div className={`food-card ${food.pick ? "food-card-pick" : ""}`}>
      <div className="food-card-header">
        <span className="food-card-name">
          {food.pick && <span className="food-pick-badge">Our pick</span>}
          {food.mapLink ? (
            <a href={food.mapLink} target="_blank" rel="noopener noreferrer" className="food-card-link">
              {food.name} <span className="food-map-icon">📍</span>
            </a>
          ) : (
            food.name
          )}
        </span>
        <span className="food-card-vibe">{food.vibe}</span>
      </div>
      <p className="food-card-desc">{food.desc}</p>
    </div>
  );
}
