import maplibregl from "maplibre-gl";
import type { Anomaly } from "./types";

export function createAnomalyMarker(map: maplibregl.Map, anomaly: Anomaly) {
  const markerElement = document.createElement("div");
  markerElement.className = "portal-leak-marker";
  markerElement.innerHTML = `
    <div class="portal-leak-pulse-ring"></div>
    <div class="portal-leak-core"></div>
  `;

  return new maplibregl.Marker({ element: markerElement, anchor: "center" })
    .setLngLat([anomaly.lng, anomaly.lat])
    .addTo(map);
}
