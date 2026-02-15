export default function TipsBanner({ tips }) {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="tips-banner">
      <div className="tips-header">
        <span className="tips-icon">💡</span>
        <span className="tips-label">Good to Know</span>
      </div>
      <ul className="tips-list">
        {tips.map((tip, i) => (
          <li key={i} className="tips-item">{tip}</li>
        ))}
      </ul>
    </div>
  );
}
