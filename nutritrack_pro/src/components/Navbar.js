import React from 'react';
import './Navbar.css';

/**
 * Navbar - Top navigation component for NutriTrack Pro
 * 
 * @param {Object} props - Component props
 * @param {Function} props.toggleSidebar - Function to toggle sidebar visibility
 * @returns {JSX.Element} The rendered Navbar component
 */
// PUBLIC_INTERFACE
const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span className="toggle-icon">☰</span>
        </button>
        <div className="navbar-brand">NutriTrack Pro</div>
      </div>
      
      <div className="navbar-right">
        <button className="navbar-action">
          <span className="action-icon">🔔</span>
        </button>
        <button className="navbar-action">
          <span className="action-icon">⚙️</span>
        </button>
        <div className="user-profile">
          <span className="profile-avatar">👤</span>
          <span className="profile-name">User</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
