import { ArrowRight, ArrowUpRight } from '../icons/Icons';

interface PillButtonProps {
  label: string;
  variant: 'dark' | 'light' | 'outline';
  withArrow?: boolean;
  arrowDir?: 'right' | 'up-right';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  id?: string;
}

export function PillButton({
  label,
  variant,
  withArrow = false,
  arrowDir = 'right',
  onClick,
  type = 'button',
  className = '',
  id,
}: PillButtonProps) {
  const variantClass = `pill-btn--${variant}`;
  const arrowClass = withArrow ? 'pill-btn--arrow' : 'pill-btn--no-arrow';

  return (
    <button
      id={id}
      className={`pill-btn ${variantClass} ${arrowClass} ${className}`}
      onClick={onClick}
      type={type}
    >
      <span className="pill-btn__inner">
        {label}
        {withArrow && (
          <span className="pill-btn__badge">
            {arrowDir === 'up-right' ? (
              <ArrowUpRight size="1rem" className="arrow-up-right" />
            ) : (
              <ArrowRight size="1rem" className="arrow-right" />
            )}
          </span>
        )}
      </span>
    </button>
  );
}
