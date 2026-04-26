import { ControlSection } from "./ControlSection";
import { LayerToggle } from "./LayerToggle";
import { GradientSlider } from "./GradientSlider";
import { OpacitySlider } from "./OpacitySlider";
import type { DisplaySettings, LayerVisibility, PortalMetrics } from "./types";

interface ControlPanelProps {
  layerVisibility: LayerVisibility;
  displaySettings: DisplaySettings;
  metrics: PortalMetrics;
  onLayerVisibilityChange: (next: LayerVisibility) => void;
  onDisplaySettingsChange: (next: DisplaySettings) => void;
  onCloseDrawer: () => void;
}

export function ControlPanel({
  layerVisibility,
  displaySettings,
  metrics,
  onLayerVisibilityChange,
  onDisplaySettingsChange,
  onCloseDrawer,
}: ControlPanelProps) {
  const syncAgeText = metrics.lastUpdated
    ? `${Math.max(0, Math.floor((Date.now() - metrics.lastUpdated.getTime()) / 1000))}s ago`
    : "Waiting for sync";

  return (
    <div className="portal-control-panel-inner">
      <div className="portal-control-header">
        <button type="button" onClick={onCloseDrawer} className="portal-control-link">Back</button>
        <span className="portal-control-label">Network Layer</span>
      </div>

      <ControlSection title="Display">
        <OpacitySlider
          label="Opacity"
          min={0.1}
          max={1}
          step={0.05}
          value={displaySettings.opacity}
          displayValue={`${Math.round(displaySettings.opacity * 100)}%`}
          onChange={(opacity) => onDisplaySettingsChange({ ...displaySettings, opacity })}
        />
        <OpacitySlider
          label="Line Size"
          min={2}
          max={12}
          step={1}
          value={displaySettings.lineSize}
          displayValue={`${displaySettings.lineSize}px`}
          onChange={(lineSize) => onDisplaySettingsChange({ ...displaySettings, lineSize })}
        />
        <GradientSlider
          value={displaySettings.threshold}
          onChange={(threshold) => onDisplaySettingsChange({ ...displaySettings, threshold })}
        />
      </ControlSection>

      <ControlSection title="Filter">
        <select
          className="portal-select"
          value={displaySettings.filter}
          onChange={(event) =>
            onDisplaySettingsChange({
              ...displaySettings,
              filter: event.target.value as DisplaySettings["filter"],
            })
          }
        >
          <option value="all">All</option>
          <option value="normal">Normal</option>
          <option value="warning">Warning</option>
          <option value="leak">Leak</option>
          <option value="offline">Offline</option>
        </select>
      </ControlSection>

      <ControlSection title="Layers">
        <LayerToggle
          label="Pipe Network"
          checked={layerVisibility.pipeNetwork}
          onChange={(checked) => onLayerVisibilityChange({ ...layerVisibility, pipeNetwork: checked })}
        />
        <LayerToggle
          label="Leak Heatmap"
          checked={layerVisibility.leakHeatmap}
          onChange={(checked) => onLayerVisibilityChange({ ...layerVisibility, leakHeatmap: checked })}
        />
        <LayerToggle
          label="Sensor Points"
          checked={layerVisibility.sensorPoints}
          onChange={(checked) => onLayerVisibilityChange({ ...layerVisibility, sensorPoints: checked })}
        />
        <LayerToggle
          label="Pressure Zones"
          checked={layerVisibility.pressureZones}
          onChange={(checked) => onLayerVisibilityChange({ ...layerVisibility, pressureZones: checked })}
        />
        <LayerToggle
          label="Repair History"
          checked={layerVisibility.repairHistory}
          onChange={(checked) => onLayerVisibilityChange({ ...layerVisibility, repairHistory: checked })}
        />
      </ControlSection>

      <ControlSection title="Live Status">
        <div className="portal-live-row">
          <span className={`portal-live-dot ${metrics.isConnected ? "is-online" : "is-offline"}`} />
          <span>{metrics.isConnected ? "SCADA Connected" : "SCADA Disconnected"}</span>
        </div>
        <p>Last sync: {syncAgeText}</p>
        <p>Active sensors: {metrics.activeSensors}</p>
      </ControlSection>
    </div>
  );
}
