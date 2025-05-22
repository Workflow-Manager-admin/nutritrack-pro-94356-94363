import React from 'react';
import './Sidebar.css';

/**
 * Sidebar - Navigation sidebar for NutriTrack Pro
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the sidebar is open
 * @returns {JSX.Element} The rendered Sidebar component
 */
// PUBLIC_INTERFACE
const Sidebar = ({ isOpen }) => {
  const navItems = [
    { icon: '📊', text: 'Dashboard', active: true },
    { icon: '🍽️', text: 'Meal Tracker' },
    { icon: '📝', text: 'Food Journal' },
    { icon: '🥗', text: 'Recipes' },
    { icon: '🎯', text: 'Goals' },
    { icon: '📈', text: 'Progress' },
    { icon: '📊', text: 'Reports' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className={`nav-item ${item.active ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="nutrition-summary">
          <h3 className="summary-title">Today's Summary</h3>
          
          <div className="summary-item">
            <div className="summary-label">Calories</div>
            <div className="summary-bar">
              <div className="summary-progress" style={{ width: '60%' }}></div>
            </div>
            <div className="summary-value">1,200 / 2,000</div>
          </div>
          
          <div className="summary-item">
            <div className="summary-label">Protein</div>
            <div className="summary-bar">
              <div className="summary-progress protein" style={{ width: '55%' }}></div>
            </div>
            <div className="summary-value">65g / 120g</div>
          </div>
          
          <div className="summary-item">
            <div className="summary-label">Carbs</div>
            <div className="summary-bar">
              <div className="summary-progress carbs" style={{ width: '52%' }}></div>
            </div>
            <div className="summary-value">130g / 250g</div>
          </div>
          
          <div className="summary-item">
            <div className="summary-label">Fat</div>
            <div className="summary-bar">
              <div className="summary-progress fat" style={{ width: '62%' }}></div>
            </div>
            <div className="summary-value">40g / 65g</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
