interface TagChipProps {
  label: string;
  className?: string;
}

export function TagChip({ label, className = '' }: TagChipProps) {
  return <span className={`tag-chip ${className}`}>{label}</span>;
}
