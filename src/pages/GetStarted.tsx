import { useMemo, useState } from "react";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { ControlPanel } from "@/components/portal/ControlPanel";
import { MapView } from "@/components/portal/MapView";
import { StatusBar } from "@/components/portal/StatusBar";
import { AlertsDrawer } from "@/components/portal/AlertsDrawer";
import type { DisplaySettings, LayerVisibility, PortalMetrics } from "@/components/portal/types";
import { useScadaData } from "@/lib/hooks/useScadaData";
import "@/components/portal/portal.css";

const INITIAL_LAYER_VISIBILITY: LayerVisibility = {
  pipeNetwork: true,
  leakHeatmap: true,
  sensorPoints: true,
  pressureZones: false,
  repairHistory: false,
};

const INITIAL_DISPLAY_SETTINGS: DisplaySettings = {
  opacity: 0.9,
  lineSize: 6,
  threshold: 0.4,
  filter: "all",
};

export function GetStarted() {
  const [layerVisibility, setLayerVisibility] = useState(INITIAL_LAYER_VISIBILITY);
  const [displaySettings, setDisplaySettings] = useState(INITIAL_DISPLAY_SETTINGS);
  const [alertsOpen, setAlertsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [locateAnomalyId, setLocateAnomalyId] = useState<string | null>(null);

  const { pipes, sensors, anomalies, isConnected, lastUpdated, refetch } = useScadaData();

  const metrics = useMemo<PortalMetrics>(() => {
    const activeSensors = sensors.filter((sensor) => sensor.status !== "offline").length;
    return {
      activeSensors,
      anomalyCount: anomalies.length,
      lastUpdated,
      isConnected,
    };
  }, [anomalies.length, isConnected, lastUpdated, sensors]);

  return (
    <section className="portal-page" aria-label="Pi-Patch live infrastructure dashboard">
      <PortalLayout
        controlPanel={
          <ControlPanel
            layerVisibility={layerVisibility}
            displaySettings={displaySettings}
            metrics={metrics}
            onLayerVisibilityChange={setLayerVisibility}
            onDisplaySettingsChange={setDisplaySettings}
            onCloseDrawer={() => setDrawerOpen(false)}
          />
        }
        map={
          <MapView
            pipes={pipes}
            sensors={sensors}
            anomalies={anomalies}
            layerVisibility={layerVisibility}
            displaySettings={displaySettings}
            onLocateHandled={() => setLocateAnomalyId(null)}
            locateAnomalyId={locateAnomalyId}
          />
        }
        statusBar={
          <StatusBar
            metrics={metrics}
            onForceRefresh={refetch}
            onViewAlerts={() => setAlertsOpen(true)}
          />
        }
        isDrawerOpen={drawerOpen}
        onDrawerOpen={setDrawerOpen}
      />

      <AlertsDrawer
        open={alertsOpen}
        anomalies={anomalies}
        onClose={() => setAlertsOpen(false)}
        onLocate={(anomalyId) => {
          setLocateAnomalyId(anomalyId);
          setAlertsOpen(false);
        }}
      />
    </section>
  );
}
