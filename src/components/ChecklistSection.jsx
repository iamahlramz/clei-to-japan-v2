import { useState, useEffect } from "react";

const STORAGE_KEY = "clei-japan-checklist";

function loadChecked() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveChecked(checked) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  } catch {
    // storage full or unavailable
  }
}

export default function ChecklistSection({ phases }) {
  const [checked, setChecked] = useState(loadChecked);

  useEffect(() => {
    saveChecked(checked);
  }, [checked]);

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalItems = phases.reduce((sum, p) => sum + p.items.length, 0);
  const totalChecked = Object.values(checked).filter(Boolean).length;
  const pct = totalItems > 0 ? Math.round((totalChecked / totalItems) * 100) : 0;

  return (
    <div className="checklist-interactive">
      <div className="checklist-progress">
        <div className="checklist-progress-bar">
          <div
            className="checklist-progress-fill"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="checklist-progress-text">
          {totalChecked}/{totalItems} done ({pct}%)
        </span>
      </div>

      {phases.map((phase, pi) => {
        const phaseChecked = phase.items.filter((item) => checked[item.id]).length;
        const phaseDone = phaseChecked === phase.items.length;
        return (
          <div key={pi} className={`checklist-phase ${phaseDone ? "checklist-phase-done" : ""}`}>
            <div className="checklist-phase-header">
              <span className="checklist-phase-icon">{phase.icon}</span>
              <span className="checklist-phase-title">{phase.phase}</span>
              <span className="checklist-phase-count">
                {phaseChecked}/{phase.items.length}
              </span>
            </div>
            <div className="checklist-phase-items">
              {phase.items.map((item) => (
                <label
                  key={item.id}
                  className={`checklist-check-item ${checked[item.id] ? "checklist-checked" : ""}`}
                >
                  <input
                    type="checkbox"
                    checked={!!checked[item.id]}
                    onChange={() => toggle(item.id)}
                    className="checklist-checkbox"
                  />
                  <span className="checklist-check-text">{item.text}</span>
                </label>
              ))}
            </div>
          </div>
        );
      })}

      {totalChecked > 0 && (
        <button
          className="checklist-reset"
          onClick={() => {
            if (window.confirm("Reset all checkboxes? This cannot be undone.")) {
              setChecked({});
            }
          }}
        >
          Reset all checkboxes
        </button>
      )}
    </div>
  );
}
