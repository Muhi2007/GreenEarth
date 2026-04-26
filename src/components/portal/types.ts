export type SensorStatus = "normal" | "warning" | "leak" | "offline";

export interface PipeProperties {
  pipe_id: string;
  diameter_mm: number;
  material: string;
  install_year?: number;
  pressure_kpa: number;
  flow_rate: number;
  health_score: number;
  last_updated: string;
}

export interface PipeFeature {
  type: "Feature";
  geometry: {
    type: "LineString";
    coordinates: number[][];
  };
  properties: PipeProperties;
}

export interface PipeNetwork {
  type: "FeatureCollection";
  features: PipeFeature[];
}

export interface SensorReading {
  sensor_id: string;
  pipe_id: string;
  lat: number;
  lng: number;
  pressure_kpa: number;
  flow_lps: number;
  status: SensorStatus;
  severity: number;
  timestamp: string;
}

export interface Anomaly {
  anomaly_id: string;
  pipe_id: string;
  sensor_id: string;
  lat: number;
  lng: number;
  type: "pressure_drop" | "flow_loss" | "confirmed_leak";
  severity: number;
  detected_at: string;
  description: string;
  is_active: boolean;
}

export interface LayerVisibility {
  pipeNetwork: boolean;
  leakHeatmap: boolean;
  sensorPoints: boolean;
  pressureZones: boolean;
  repairHistory: boolean;
}

export interface DisplaySettings {
  opacity: number;
  lineSize: number;
  threshold: number;
  filter: "all" | SensorStatus;
}

export interface PortalMetrics {
  isConnected: boolean;
  activeSensors: number;
  anomalyCount: number;
  lastUpdated: Date | null;
}
