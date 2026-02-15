export default function TransportGuide({ transport, theme }) {
  if (!transport) return null;

  const style = theme ? {
    "--transport-bg": theme.light || "#F0F4FF",
    "--transport-border": theme.border || "#D9E2FF",
    "--transport-title": theme.accent || "#4338CA",
    "--transport-text": theme.accent || "#3730A3",
  } : {};

  return (
    <div className="transport-guide" style={style}>
      <div className="transport-header">
        <span className="transport-icon">{transport.icon || "🚃"}</span>
        <span className="transport-title">{transport.title}</span>
      </div>
      <ol className="transport-steps">
        {transport.steps.map((step, i) => (
          <li key={i} className="transport-step">{step}</li>
        ))}
      </ol>
    </div>
  );
}
