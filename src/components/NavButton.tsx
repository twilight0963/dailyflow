import React from 'react';
import './NavButton.css';

interface NavButtonProps {
  enabled?: boolean;
  label: string;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ enabled = true, label, onClick }) => {
  return (
    <button
      className={`nav-button ${enabled ? 'enabled' : 'disabled'}`}
      onClick={enabled ? onClick : undefined}
      disabled={!enabled}
    >
      <span className="nav-button-label">{label}</span>
    </button>
  );
};

export default NavButton;
