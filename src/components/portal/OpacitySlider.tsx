interface OpacitySliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  displayValue: string;
  onChange: (value: number) => void;
}

export function OpacitySlider({
  label,
  min,
  max,
  step,
  value,
  displayValue,
  onChange,
}: OpacitySliderProps) {
  return (
    <div className="portal-control-field">
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <span>{displayValue}</span>
    </div>
  );
}
