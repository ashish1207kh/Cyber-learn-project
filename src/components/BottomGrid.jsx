import React from 'react';
import { Code2, ShieldCheck, Trophy, Users, ArrowRight } from 'lucide-react';

export default function BottomGrid() {
  const cards = [
    {
      id: 'labs',
      title: 'Hands-on Labs',
      description: 'Practice with real tools in a safe environment.',
      linkText: 'Try Labs',
      icon: Code2,
      className: 'card-labs',
    },
    {
      id: 'paths',
      title: 'Learning Paths',
      description: 'Structured roadmaps for all levels.',
      linkText: 'View Roadmaps',
      icon: ShieldCheck,
      className: 'card-paths',
    },
    {
      id: 'ctf',
      title: 'CTF & Challenges',
      description: 'Test your skills with real-world challenges.',
      linkText: 'Start Challenge',
      icon: Trophy,
      className: 'card-ctf',
    },
    {
      id: 'community',
      title: 'Community',
      description: 'Connect, discuss, and grow together.',
      linkText: 'Join Now',
      icon: Users,
      className: 'card-community',
    },
  ];

  return (
    <div className="bottom-grid select-none">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <a
            key={card.id}
            href={`#${card.id}`}
            className={`bottom-card ${card.className}`}
          >
            <div className="card-icon-wrapper">
              <Icon size={20} />
            </div>
            <div className="card-content">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-description">{card.description}</p>
              <div className="card-link">
                <span>{card.linkText}</span>
                <ArrowRight size={10} style={{ marginLeft: 4 }} />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
