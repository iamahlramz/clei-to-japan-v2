export default function FlightLeg({ guide }) {
  return (
    <div className="flight-leg">
      {guide.alert && (
        <div className="flight-alert">
          <span className="flight-alert-icon">⚠️</span>
          <span>{guide.alert}</span>
        </div>
      )}

      <div className="flight-terminal">
        <span className="flight-terminal-name">{guide.terminal.name}</span>
        {guide.terminal.note && <span className="flight-terminal-note">{guide.terminal.note}</span>}
      </div>

      {guide.groups && (
        <div className="flight-groups">
          {guide.groups.map((group, gi) => (
            <div key={gi} className="flight-group">
              <h4 className="flight-group-label">{group.label}</h4>
              <div className="flight-steps">
                {group.steps.map((step, si) => (
                  <div key={si} className="flight-step">
                    <span className="flight-step-time">{step.time}</span>
                    <div className="flight-step-body">
                      <span className="flight-step-text">{step.text}</span>
                      {step.links && (
                        <span className="item-links">
                          {step.links.map((link, li) => (
                            <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="item-link">
                              {link.text} ↗
                            </a>
                          ))}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flight-timeline">
        <h4 className="flight-section-title">Step-by-Step Timeline</h4>
        {guide.timeline.map((step, i) => (
          <div key={i} className="flight-step">
            {step.icon && <span className="flight-step-icon">{step.icon}</span>}
            <span className="flight-step-time">{step.time}</span>
            <div className="flight-step-body">
              <span className="flight-step-text">{step.text}</span>
              {step.links && (
                <span className="item-links">
                  {step.links.map((link, li) => (
                    <a key={li} href={link.url} target="_blank" rel="noopener noreferrer" className="item-link">
                      {link.text} ↗
                    </a>
                  ))}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {guide.tips && guide.tips.length > 0 && (
        <div className="flight-tips">
          <h4 className="flight-section-title">💡 Tips</h4>
          <ul className="flight-tips-list">
            {guide.tips.map((tip, i) => {
              const text = typeof tip === 'string' ? tip : tip.text;
              const links = typeof tip === 'string' ? null : tip.links;
              return (
                <li key={i} className="flight-tip">
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
      )}
    </div>
  );
}
