import type { ReactNode } from 'react';

interface AnimatedLinkProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function AnimatedLink({ href, onClick, children, className = '' }: AnimatedLinkProps) {
  if (onClick || !href) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
