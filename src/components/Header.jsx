export default function Header() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-date">March 27 – April 4, 2026</div>
        <h1 className="hero-title">Tara, Japan!</h1>
        <p className="hero-subtitle">
          9 days, 2 cities, 6 of us — let's make some memories.
          <br />
          Home base: Hanazono-cho, Osaka (2 stops from Namba!)
        </p>
        <div className="hero-tags">
          {["🌸 Cherry Blossoms", "🛍️ Shopping Spree", "❄️ Snow in Sapporo"].map((tag) => (
            <span key={tag} className="hero-tag">{tag}</span>
          ))}
        </div>
        <p className="hero-hook">Everything you need for our trip, all in one place. Just scroll.</p>
      </div>
    </header>
  );
}
