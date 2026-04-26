import type { PortalMetrics } from "./types";

interface StatusBarProps {
  metrics: PortalMetrics;
  onForceRefresh: () => void;
  onViewAlerts: () => void;
}

function relativeSync(lastUpdated: Date | null) {
  if (!lastUpdated) return "never";
  const seconds = Math.max(0, Math.floor((Date.now() - lastUpdated.getTime()) / 1000));
  return `${seconds}s ago`;
}

export function StatusBar({ metrics, onForceRefresh, onViewAlerts }: StatusBarProps) {
  return (
    <div className="portal-status-content">
      <span className="portal-status-group">
        <span className={`portal-status-live-dot ${metrics.isConnected ? "is-online" : "is-offline"}`} />
        {metrics.isConnected ? "SCADA Live" : "SCADA Offline"}
      </span>
      <span>{metrics.activeSensors} sensors active</span>
      <span>Last updated: {relativeSync(metrics.lastUpdated)}</span>
      <button type="button" onClick={onForceRefresh} className="portal-status-button">
        Force Refresh
      </button>
      <span>{metrics.anomalyCount} anomalies detected</span>
      <button type="button" onClick={onViewAlerts} className="portal-status-button">
        View Alerts
      </button>
    </div>
  );
}
