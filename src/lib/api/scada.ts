import type { Anomaly, PipeNetwork, SensorReading } from "@/components/portal/types";

function buildMockPipes(): PipeNetwork {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [49.861, 40.405],
            [49.867, 40.409],
            [49.872, 40.414],
          ],
        },
        properties: {
          pipe_id: "PIPE-0042",
          diameter_mm: 150,
          material: "steel",
          install_year: 1987,
          pressure_kpa: 320,
          flow_rate: 2.4,
          health_score: 0.78,
          last_updated: new Date().toISOString(),
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [49.853, 40.408],
            [49.86, 40.412],
            [49.868, 40.416],
          ],
        },
        properties: {
          pipe_id: "PIPE-0078",
          diameter_mm: 100,
          material: "PVC",
          install_year: 2001,
          pressure_kpa: 245,
          flow_rate: 1.8,
          health_score: 0.51,
          last_updated: new Date().toISOString(),
        },
      },
    ],
  };
}

function buildMockSensors(): SensorReading[] {
  return [
    {
      sensor_id: "SEN-112",
      pipe_id: "PIPE-0042",
      lat: 40.412,
      lng: 49.8671,
      pressure_kpa: 280,
      flow_lps: 1.7,
      status: "leak",
      severity: 0.87,
      timestamp: new Date().toISOString(),
    },
    {
      sensor_id: "SEN-203",
      pipe_id: "PIPE-0078",
      lat: 40.4085,
      lng: 49.871,
      pressure_kpa: 301,
      flow_lps: 2.1,
      status: "warning",
      severity: 0.52,
      timestamp: new Date().toISOString(),
    },
    {
      sensor_id: "SEN-247",
      pipe_id: "PIPE-0078",
      lat: 40.4102,
      lng: 49.8616,
      pressure_kpa: 339,
      flow_lps: 2.6,
      status: "normal",
      severity: 0.12,
      timestamp: new Date().toISOString(),
    },
  ];
}

function buildMockAnomalies(): Anomaly[] {
  return [
    {
      anomaly_id: "ANO-001",
      pipe_id: "PIPE-0042",
      sensor_id: "SEN-112",
      lat: 40.412,
      lng: 49.8671,
      type: "confirmed_leak",
      severity: 0.87,
      detected_at: new Date().toISOString(),
      description: "Pressure drop of 42% below nominal.",
      is_active: true,
    },
    {
      anomaly_id: "ANO-002",
      pipe_id: "PIPE-0078",
      sensor_id: "SEN-203",
      lat: 40.4085,
      lng: 49.871,
      type: "pressure_drop",
      severity: 0.52,
      detected_at: new Date().toISOString(),
      description: "Gradual pressure decline over last 4 hours.",
      is_active: true,
    },
  ];
}

async function withLatency<T>(payload: T): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return payload;
}

export function fetchPipeNetwork() {
  return withLatency(buildMockPipes());
}

export function fetchSensorReadings() {
  return withLatency(buildMockSensors());
}

export function fetchAnomalies() {
  return withLatency(buildMockAnomalies());
}
