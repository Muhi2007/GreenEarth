interface LayerToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function LayerToggle({ label, checked, onChange }: LayerToggleProps) {
  return (
    <label className="portal-layer-toggle">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
