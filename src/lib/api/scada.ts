import type { Anomaly, PipeNetwork, SensorReading } from "@/components/portal/types";

// Helper function to interpolate a point along a line segment
function getPointOnLineSegment(
  [lng1, lat1]: [number, number],
  [lng2, lat2]: [number, number],
  ratio: number
): [number, number] {
  const lng = lng1 + (lng2 - lng1) * ratio;
  const lat = lat1 + (lat2 - lat1) * ratio;
  return [lng, lat];
}

// Helper function to get a random point on a pipe route
function getRandomPointOnPipe(coordinates: [number, number][]): [number, number] {
  const segmentIndex = Math.floor(Math.random() * (coordinates.length - 1));
  const ratio = Math.random();
  return getPointOnLineSegment(coordinates[segmentIndex], coordinates[segmentIndex + 1], ratio);
}

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
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [49.855, 40.395],
            [49.862, 40.399],
            [49.869, 40.405],
            [49.875, 40.411],
          ],
        },
        properties: {
          pipe_id: "PIPE-0103",
          diameter_mm: 200,
          material: "cast iron",
          install_year: 1995,
          pressure_kpa: 280,
          flow_rate: 3.2,
          health_score: 0.65,
          last_updated: new Date().toISOString(),
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [49.848, 40.418],
            [49.855, 40.422],
            [49.863, 40.425],
            [49.871, 40.421],
          ],
        },
        properties: {
          pipe_id: "PIPE-0115",
          diameter_mm: 120,
          material: "PVC",
          install_year: 2008,
          pressure_kpa: 310,
          flow_rate: 2.1,
          health_score: 0.88,
          last_updated: new Date().toISOString(),
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [49.875, 40.395],
            [49.879, 40.401],
            [49.882, 40.408],
            [49.88, 40.415],
          ],
        },
        properties: {
          pipe_id: "PIPE-0162",
          diameter_mm: 150,
          material: "steel",
          install_year: 1998,
          pressure_kpa: 305,
          flow_rate: 2.7,
          health_score: 0.72,
          last_updated: new Date().toISOString(),
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [49.845, 40.402],
            [49.851, 40.408],
            [49.857, 40.413],
            [49.863, 40.417],
          ],
        },
        properties: {
          pipe_id: "PIPE-0198",
          diameter_mm: 110,
          material: "PVC",
          install_year: 2005,
          pressure_kpa: 290,
          flow_rate: 1.9,
          health_score: 0.81,
          last_updated: new Date().toISOString(),
        },
      },
    ],
  };
}

function buildMockSensors(): SensorReading[] {
  const pipes = buildMockPipes();
  const sensors: SensorReading[] = [];
  let sensorId = 100;

  // Generate 2-3 sensors per pipe
  pipes.features.forEach((feature) => {
    const pipeId = feature.properties.pipe_id;
    const coordinates = (feature.geometry as any).coordinates as [number, number][];
    const sensorCount = 2 + Math.floor(Math.random() * 2);

    for (let i = 0; i < sensorCount; i++) {
      const [lng, lat] = getRandomPointOnPipe(coordinates);
      const statuses = ["normal", "warning", "leak"] as const;
      const status = statuses[Math.floor(Math.random() * statuses.length)];

      sensors.push({
        sensor_id: `SEN-${sensorId++}`,
        pipe_id: pipeId,
        lat,
        lng,
        pressure_kpa: 250 + Math.random() * 100,
        flow_lps: 1.5 + Math.random() * 3,
        status,
        severity: status === "normal" ? Math.random() * 0.3 : 0.4 + Math.random() * 0.6,
        timestamp: new Date().toISOString(),
      });
    }
  });

  return sensors;
}

function buildMockAnomalies(): Anomaly[] {
  const pipes = buildMockPipes();
  const anomalies: Anomaly[] = [];
  let anomalyId = 1;

  // Generate anomalies on random positions within pipes
  const anomalyCount = 4 + Math.floor(Math.random() * 3);

  for (let i = 0; i < anomalyCount; i++) {
    const randomPipeIndex = Math.floor(Math.random() * pipes.features.length);
    const feature = pipes.features[randomPipeIndex];
    const pipeId = feature.properties.pipe_id;
    const coordinates = (feature.geometry as any).coordinates as [number, number][];

    const [lng, lat] = getRandomPointOnPipe(coordinates);
    const types = ["confirmed_leak", "pressure_drop", "flow_anomaly"] as const;
    const type = types[Math.floor(Math.random() * types.length)];
    const severity = 0.5 + Math.random() * 0.45;

    anomalies.push({
      anomaly_id: `ANO-${String(anomalyId).padStart(3, "0")}`,
      pipe_id: pipeId,
      sensor_id: `SEN-${100 + i}`,
      lat,
      lng,
      type,
      severity,
      detected_at: new Date().toISOString(),
      description:
        type === "confirmed_leak"
          ? `Confirmed leak detected with ${(severity * 100).toFixed(0)}% confidence.`
          : type === "pressure_drop"
            ? `Pressure drop of ${(severity * 50).toFixed(0)}% below nominal.`
            : `Flow anomaly detected with ${(severity * 100).toFixed(0)}% severity.`,
      is_active: true,
    });

    anomalyId++;
  }

  return anomalies;
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
