import type { PipeProperties, SensorReading } from "./types";

function statusLabel(score: number) {
  if (score >= 0.8) return "Good";
  if (score >= 0.5) return "Warning";
  return "Critical";
}

export function buildPipeTooltip(props: PipeProperties) {
  const healthPercent = Math.round(props.health_score * 100);
  return `
    <div class="portal-tooltip">
      <h4>${props.pipe_id}</h4>
      <div class="portal-tooltip-divider"></div>
      <p><strong>Health:</strong> ${healthPercent}% (${statusLabel(props.health_score)})</p>
      <p><strong>Pressure:</strong> ${props.pressure_kpa} kPa</p>
      <p><strong>Flow:</strong> ${props.flow_rate} L/s</p>
      <p><strong>Diameter:</strong> ${props.diameter_mm} mm</p>
      <p><strong>Material:</strong> ${props.material}</p>
    </div>
  `;
}

export function buildSensorTooltip(sensor: SensorReading) {
  return `
    <div class="portal-tooltip">
      <h4>${sensor.sensor_id}</h4>
      <div class="portal-tooltip-divider"></div>
      <p><strong>Pipe:</strong> ${sensor.pipe_id}</p>
      <p><strong>Status:</strong> ${sensor.status}</p>
      <p><strong>Pressure:</strong> ${sensor.pressure_kpa} kPa</p>
      <p><strong>Flow:</strong> ${sensor.flow_lps} L/s</p>
      <p><strong>Severity:</strong> ${Math.round(sensor.severity * 100)}%</p>
    </div>
  `;
}
