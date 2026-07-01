import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-capsule-container select-none">
      <div className="footer-capsule">
        <Shield size={14} style={{ color: '#475569' }} />
        <span>"The more you learn, the more secure the world becomes."</span>
        <Shield size={14} style={{ color: '#475569' }} />
      </div>
    </footer>
  );
}
