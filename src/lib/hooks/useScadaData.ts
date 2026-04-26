import { useCallback, useEffect, useState } from "react";
import { fetchAnomalies, fetchPipeNetwork, fetchSensorReadings } from "@/lib/api/scada";
import type { Anomaly, PipeNetwork, SensorReading } from "@/components/portal/types";

const POLL_INTERVAL = 30_000;

export function useScadaData() {
  const [pipes, setPipes] = useState<PipeNetwork | null>(null);
  const [sensors, setSensors] = useState<SensorReading[]>([]);
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchAll = useCallback(async () => {
    try {
      const [pipeData, sensorData, anomalyData] = await Promise.all([
        fetchPipeNetwork(),
        fetchSensorReadings(),
        fetchAnomalies(),
      ]);
      setPipes(pipeData);
      setSensors(sensorData);
      setAnomalies(anomalyData.filter((item) => item.is_active));
      setLastUpdated(new Date());
      setIsConnected(true);
    } catch (error) {
      console.error("SCADA fetch failed", error);
      setIsConnected(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
    const intervalId = window.setInterval(fetchAll, POLL_INTERVAL);
    return () => window.clearInterval(intervalId);
  }, [fetchAll]);

  return { pipes, sensors, anomalies, isConnected, lastUpdated, refetch: fetchAll };
}
