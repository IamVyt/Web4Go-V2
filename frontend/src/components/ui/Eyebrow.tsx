interface EyebrowProps {
  label: string;
  tone?: 'dark' | 'light';
  className?: string;
  id?: string;
}

export function Eyebrow({ label, tone = 'dark', className = '', id }: EyebrowProps) {
  return (
    <span id={id} className={`eyebrow eyebrow--${tone} ${className}`}>
      <span className="dot" />
      {label}
    </span>
  );
}
