import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import { useMapboxMap } from "@/lib/hooks/useMapboxMap";
import { useMapLayers } from "@/lib/hooks/useMapLayers";
import type { Anomaly, DisplaySettings, LayerVisibility, PipeNetwork, SensorReading } from "./types";

interface MapViewProps {
  pipes: PipeNetwork | null;
  sensors: SensorReading[];
  anomalies: Anomaly[];
  layerVisibility: LayerVisibility;
  displaySettings: DisplaySettings;
  locateAnomalyId: string | null;
  onLocateHandled: () => void;
}

export function MapView({
  pipes,
  sensors,
  anomalies,
  layerVisibility,
  displaySettings,
  locateAnomalyId,
  onLocateHandled,
}: MapViewProps) {
  const { containerRef, mapRef } = useMapboxMap();

  useMapLayers({
    mapRef,
    pipes,
    sensors,
    anomalies,
    layerVisibility,
    displaySettings,
    locateAnomalyId,
    onLocateHandled,
  });

  return <div ref={containerRef} className="portal-map-canvas" aria-label="Pi-Patch live infrastructure map" />;
}
