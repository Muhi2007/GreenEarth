import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

const INITIAL_VIEW = {
  center: [49.8671, 40.4093] as [number, number],
  zoom: 13,
  pitch: 30,
  bearing: -10,
};

export function useMapboxMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    mapRef.current = new maplibregl.Map({
      container: containerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      ...INITIAL_VIEW,
      antialias: true,
    });

    mapRef.current.addControl(new maplibregl.NavigationControl(), "bottom-right");
    mapRef.current.addControl(new maplibregl.ScaleControl(), "bottom-left");

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return { containerRef, mapRef };
}
