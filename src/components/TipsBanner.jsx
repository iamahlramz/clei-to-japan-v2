export default function TipsBanner({ tips }) {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="tips-banner">
      <div className="tips-header">
        <span className="tips-icon">💡</span>
        <span className="tips-label">Good to Know</span>
      </div>
      <ul className="tips-list">
        {tips.map((tip, i) => {
          const text = typeof tip === 'string' ? tip : tip.text;
          const links = typeof tip === 'string' ? null : tip.links;
          return (
            <li key={i} className="tips-item">
              {text}
              {links && (
                <span className="item-links">
                  {links.map((link, li) => (
                    <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="item-link">
                      {link.text} ↗
                    </a>
                  ))}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
