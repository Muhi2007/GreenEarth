import { useEffect, useMemo, useRef } from "react";
import type { RefObject } from "react";
import maplibregl from "maplibre-gl";
import { createAnomalyMarker } from "@/components/portal/AnomalyMarker";
import { buildPipeTooltip, buildSensorTooltip } from "@/components/portal/MapTooltip";
import type { Anomaly, DisplaySettings, LayerVisibility, PipeNetwork, SensorReading } from "@/components/portal/types";

interface UseMapLayersArgs {
  mapRef: RefObject<maplibregl.Map | null>;
  pipes: PipeNetwork | null;
  sensors: SensorReading[];
  anomalies: Anomaly[];
  layerVisibility: LayerVisibility;
  displaySettings: DisplaySettings;
  locateAnomalyId: string | null;
  onLocateHandled: () => void;
}

const PIPE_SOURCE = "scada-pipes";
const SENSOR_SOURCE = "scada-sensors";
const ANOMALY_SOURCE = "scada-anomalies";
const PIPE_LAYER = "pipe-network";
const HEATMAP_LAYER = "pipe-heatmap";
const SENSOR_LAYER = "sensor-points";

export function useMapLayers({
  mapRef,
  pipes,
  sensors,
  anomalies,
  layerVisibility,
  displaySettings,
  locateAnomalyId,
  onLocateHandled,
}: UseMapLayersArgs) {
  const popupRef = useRef<maplibregl.Popup | null>(null);
  const leakMarkersRef = useRef<maplibregl.Marker[]>([]);

  const sensorFeatures = useMemo(
    () => ({
      type: "FeatureCollection" as const,
      features: sensors
        .filter((sensor) => displaySettings.filter === "all" || sensor.status === displaySettings.filter)
        .map((sensor) => ({
          type: "Feature" as const,
          geometry: { type: "Point" as const, coordinates: [sensor.lng, sensor.lat] },
          properties: sensor,
        })),
    }),
    [displaySettings.filter, sensors],
  );

  const anomalyFeatures = useMemo(
    () => ({
      type: "FeatureCollection" as const,
      features: anomalies
        .filter((anomaly) => anomaly.severity >= displaySettings.threshold)
        .map((anomaly) => ({
          type: "Feature" as const,
          geometry: { type: "Point" as const, coordinates: [anomaly.lng, anomaly.lat] },
          properties: anomaly,
        })),
    }),
    [anomalies, displaySettings.threshold],
  );

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (popupRef.current) return;
    popupRef.current = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      className: "portal-map-popup",
    });
  }, [mapRef]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !pipes) return;

    const setupLayers = () => {
      if (!map.getSource(PIPE_SOURCE)) {
        map.addSource(PIPE_SOURCE, { type: "geojson", data: pipes });
      }
      if (!map.getLayer(PIPE_LAYER)) {
        map.addLayer({
          id: PIPE_LAYER,
          type: "line",
          source: PIPE_SOURCE,
          layout: { "line-join": "round", "line-cap": "round" },
          paint: {
            "line-width": ["interpolate", ["linear"], ["zoom"], 10, 1.5, 14, 3.5, 17, 6],
            "line-color": [
              "interpolate",
              ["linear"],
              ["get", "health_score"],
              0, "#EF4444",
              0.3, "#F97316",
              0.6, "#EAB308",
              0.8, "#84CC16",
              1, "#22C55E",
            ],
            "line-opacity": displaySettings.opacity,
          },
        });
      }

      if (!map.getSource(ANOMALY_SOURCE)) {
        map.addSource(ANOMALY_SOURCE, { type: "geojson", data: anomalyFeatures });
      }
      if (!map.getLayer(HEATMAP_LAYER)) {
        map.addLayer({
          id: HEATMAP_LAYER,
          type: "heatmap",
          source: ANOMALY_SOURCE,
          maxzoom: 16,
          paint: {
            "heatmap-weight": ["interpolate", ["linear"], ["get", "severity"], 0, 0, 1, 1],
            "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 10, 20, 14, 40, 16, 60],
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0, "rgba(255,255,255,0)",
              0.2, "rgba(254,240,138,0.6)",
              0.4, "rgba(251,191,36,0.7)",
              0.6, "rgba(249,115,22,0.8)",
              0.8, "rgba(239,68,68,0.85)",
              1, "rgba(185,28,28,0.9)",
            ],
            "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 13, 0.85, 16, 0.4],
          },
        });
      }

      if (!map.getSource(SENSOR_SOURCE)) {
        map.addSource(SENSOR_SOURCE, { type: "geojson", data: sensorFeatures });
      }
      if (!map.getLayer(SENSOR_LAYER)) {
        map.addLayer({
          id: SENSOR_LAYER,
          type: "circle",
          source: SENSOR_SOURCE,
          minzoom: 12,
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 12, 4, 16, 8],
            "circle-color": [
              "case",
              ["==", ["get", "status"], "leak"], "#EF4444",
              ["==", ["get", "status"], "warning"], "#F97316",
              ["==", ["get", "status"], "normal"], "#22C55E",
              "#9CA3AF",
            ],
            "circle-stroke-width": 2,
            "circle-stroke-color": "#FFFFFF",
            "circle-opacity": 0.95,
          },
        });
      }
    };

    if (map.isStyleLoaded()) {
      setupLayers();
      return;
    }
    map.once("load", setupLayers);
    return () => {
      map.off("load", setupLayers);
    };
  }, [anomalyFeatures, displaySettings.opacity, mapRef, pipes, sensorFeatures]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    (map.getSource(PIPE_SOURCE) as maplibregl.GeoJSONSource | undefined)?.setData(
      pipes ?? { type: "FeatureCollection", features: [] },
    );
    (map.getSource(SENSOR_SOURCE) as maplibregl.GeoJSONSource | undefined)?.setData(sensorFeatures);
    (map.getSource(ANOMALY_SOURCE) as maplibregl.GeoJSONSource | undefined)?.setData(anomalyFeatures);
  }, [anomalyFeatures, mapRef, pipes, sensorFeatures]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (map.getLayer(PIPE_LAYER)) {
      map.setPaintProperty(PIPE_LAYER, "line-opacity", displaySettings.opacity);
      map.setPaintProperty(PIPE_LAYER, "line-width", displaySettings.lineSize);
    }
  }, [displaySettings.lineSize, displaySettings.opacity, mapRef]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (map.getLayer(PIPE_LAYER)) {
      map.setLayoutProperty(PIPE_LAYER, "visibility", layerVisibility.pipeNetwork ? "visible" : "none");
    }
    if (map.getLayer(HEATMAP_LAYER)) {
      map.setLayoutProperty(HEATMAP_LAYER, "visibility", layerVisibility.leakHeatmap ? "visible" : "none");
    }
    if (map.getLayer(SENSOR_LAYER)) {
      map.setLayoutProperty(SENSOR_LAYER, "visibility", layerVisibility.sensorPoints ? "visible" : "none");
    }
  }, [layerVisibility, mapRef]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    leakMarkersRef.current.forEach((marker) => marker.remove());
    leakMarkersRef.current = anomalies
      .filter((anomaly) => anomaly.severity >= displaySettings.threshold)
      .map((anomaly) => createAnomalyMarker(map, anomaly));
  }, [anomalies, displaySettings.threshold, mapRef]);

  useEffect(() => {
    const map = mapRef.current;
    const popup = popupRef.current;
    if (!map || !popup) return;

    const handlePipeHover = (event: maplibregl.MapMouseEvent & { features?: maplibregl.MapGeoJSONFeature[] }) => {
      if (!event.features?.[0]) return;
      popup.setLngLat(event.lngLat).setHTML(buildPipeTooltip(event.features[0].properties as any)).addTo(map);
    };
    const handleSensorHover = (event: maplibregl.MapMouseEvent & { features?: maplibregl.MapGeoJSONFeature[] }) => {
      if (!event.features?.[0]) return;
      popup.setLngLat(event.lngLat).setHTML(buildSensorTooltip(event.features[0].properties as any)).addTo(map);
    };
    const handleLeave = () => popup.remove();

    map.on("mousemove", PIPE_LAYER, handlePipeHover);
    map.on("mouseleave", PIPE_LAYER, handleLeave);
    map.on("mousemove", SENSOR_LAYER, handleSensorHover);
    map.on("mouseleave", SENSOR_LAYER, handleLeave);

    return () => {
      map.off("mousemove", PIPE_LAYER, handlePipeHover);
      map.off("mouseleave", PIPE_LAYER, handleLeave);
      map.off("mousemove", SENSOR_LAYER, handleSensorHover);
      map.off("mouseleave", SENSOR_LAYER, handleLeave);
    };
  }, [mapRef]);

  useEffect(() => {
    if (!locateAnomalyId) return;
    const map = mapRef.current;
    if (!map) return;

    const anomaly = anomalies.find((item) => item.anomaly_id === locateAnomalyId);
    if (!anomaly) {
      onLocateHandled();
      return;
    }

    map.flyTo({
      center: [anomaly.lng, anomaly.lat],
      zoom: 16,
      pitch: 45,
      duration: 1200,
      easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    });
    onLocateHandled();
  }, [anomalies, locateAnomalyId, mapRef, onLocateHandled]);
}
