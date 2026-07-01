import React, { useRef } from 'react';
import gsap from 'gsap';
import { Target, Shield, ArrowRight } from 'lucide-react';

export default function SecurityPanel({ type }) {
  const cardRef = useRef(null);

  const offensiveDetails = {
    title: 'Offensive Security',
    description: 'Think like an attacker. Learn ethical hacking, penetration testing, and exploit development.',
    icon: Target,
    buttonText: 'Explore Offensive',
  };

  const defensiveDetails = {
    title: 'Defensive Security',
    description: 'Defend. Detect. Respond. Learn blue teaming, SIEM, SOC, and incident response.',
    icon: Shield,
    buttonText: 'Explore Defensive',
  };

  const details = type === 'offensive' ? offensiveDetails : defensiveDetails;
  const TitleIcon = details.icon;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power2.out',
      duration: 0.5,
    });
  };

  return (
    <div 
      ref={cardRef}
      className={`security-panel ${type}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ minHeight: '340px' }} // Dynamic size buffer
    >
      <div>
        <div className="panel-icon-container">
          <div className="panel-icon-circle">
            <TitleIcon size={28} />
          </div>
        </div>

        <h3 className="panel-title">{details.title}</h3>
        <p className="panel-description" style={{ marginBottom: '40px' }}>{details.description}</p>
      </div>

      <button className="panel-btn">
        <span>{details.buttonText}</span>
        <ArrowRight />
      </button>
    </div>
  );
}
