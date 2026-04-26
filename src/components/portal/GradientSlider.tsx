interface GradientSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function GradientSlider({ value, onChange }: GradientSliderProps) {
  return (
    <div className="portal-control-field">
      <label htmlFor="portal-threshold">Threshold</label>
      <input
        id="portal-threshold"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <span>{Math.round(value * 100)}%</span>
    </div>
  );
}
