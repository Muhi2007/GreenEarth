import type { Anomaly } from "./types";

interface AlertsDrawerProps {
  open: boolean;
  anomalies: Anomaly[];
  onClose: () => void;
  onLocate: (anomalyId: string) => void;
}

export function AlertsDrawer({ open, anomalies, onClose, onLocate }: AlertsDrawerProps) {
  return (
    <>
      <div className={`portal-alerts-backdrop ${open ? "is-open" : ""}`} onClick={onClose} />
      <aside className={`portal-alerts-drawer ${open ? "is-open" : ""}`}>
        <div className="portal-alerts-header">
          <h3>Active Anomalies ({anomalies.length})</h3>
          <button type="button" onClick={onClose} aria-label="Close alerts">x</button>
        </div>
        <div className="portal-alerts-list">
          {anomalies.map((anomaly) => (
            <article key={anomaly.anomaly_id} className="portal-alert-card">
              <p><strong>{anomaly.pipe_id}</strong></p>
              <p>{anomaly.type.replace("_", " ")}</p>
              <p>Severity: {Math.round(anomaly.severity * 100)}%</p>
              <button type="button" onClick={() => onLocate(anomaly.anomaly_id)}>
                Locate on Map
              </button>
            </article>
          ))}
        </div>
      </aside>
    </>
  );
}
