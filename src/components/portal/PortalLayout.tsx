import type { ReactNode } from "react";

interface PortalLayoutProps {
  controlPanel: ReactNode;
  map: ReactNode;
  statusBar: ReactNode;
  isDrawerOpen: boolean;
  onDrawerOpen: (open: boolean) => void;
}

export function PortalLayout({
  controlPanel,
  map,
  statusBar,
  isDrawerOpen,
  onDrawerOpen,
}: PortalLayoutProps) {
  return (
    <div className="portal-layout-shell">
      <div className="portal-layout-desktop">
        <aside className="portal-control-panel">{controlPanel}</aside>
        <div className="portal-map-area">{map}</div>
        <div className="portal-status-bar">{statusBar}</div>
      </div>

      <div className="portal-layout-mobile">
        <div className="portal-map-area">{map}</div>
        <div className="portal-status-bar">{statusBar}</div>
        <button
          type="button"
          className="portal-drawer-handle"
          onClick={() => onDrawerOpen(!isDrawerOpen)}
          aria-expanded={isDrawerOpen}
          aria-controls="portal-drawer-panel"
        >
          <span className="portal-drawer-handle-pill" />
          <span>Controls</span>
        </button>
        <div
          id="portal-drawer-panel"
          className={`portal-mobile-drawer ${isDrawerOpen ? "is-open" : ""}`}
        >
          {controlPanel}
        </div>
      </div>
    </div>
  );
}
