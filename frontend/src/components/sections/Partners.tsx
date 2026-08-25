import { CircleDot } from '../icons/Icons';
import { PARTNER_NAMES } from '../../lib/constants';

interface PartnersProps {
  revealed?: boolean;
}

export function Partners({ revealed = false }: PartnersProps) {
  return (
    <div className={`hero__partners ${revealed ? 'revealed' : ''}`} id="heroPartners">
      <div className="hero__partners-label">Trusted by</div>
      <div className="hero__partners-grid">
        {PARTNER_NAMES.map((name) => (
          <span key={name} className="partner-item">
            <CircleDot size="0.875rem" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
