import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './MainContainer.css';

// Import pages
import Dashboard from '../pages/Dashboard';
import MealTracker from '../pages/MealTracker';
import FoodJournal from '../pages/FoodJournal';

/**
 * MainContainer - Primary container component for NutriTrack Pro
 * 
 * This component serves as the root layout container for the NutriTrack Pro application.
 * It provides the overall structure including navbar, sidebar, and content area.
 * 
 * @returns {JSX.Element} The rendered MainContainer component
 */
// PUBLIC_INTERFACE
const MainContainer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="nutritrack-container">
      {/* Top Navigation Bar */}
      <header className="nutritrack-header">
        <div className="header-left">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <span className="menu-icon">{sidebarOpen ? '✕' : '☰'}</span>
          </button>
          <h1 className="app-title">NutriTrack Pro</h1>
        </div>
        <div className="header-right">
          <button className="profile-button">
            <span className="profile-icon">👤</span>
          </button>
        </div>
      </header>

      <div className="nutritrack-body">
        {/* Sidebar Navigation */}
        <aside className={`nutritrack-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <nav className="sidebar-nav">
            <ul className="nav-list">
              <li 
                className="nav-item active"
                onClick={() => window.location.href = '/dashboard'}
              >
                <span className="nav-icon">📊</span>
                <span className="nav-text">Dashboard</span>
              </li>
              <li 
                className="nav-item"
                onClick={() => window.location.href = '/meal-tracker'}
              >
                <span className="nav-icon">🍽️</span>
                <span className="nav-text">Meal Tracker</span>
              </li>
              <li 
                className="nav-item"
                onClick={() => window.location.href = '/food-journal'}
              >
                <span className="nav-icon">📝</span>
                <span className="nav-text">Food Journal</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon">🎯</span>
                <span className="nav-text">Goals</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon">📈</span>
                <span className="nav-text">Progress</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon">⚙️</span>
                <span className="nav-text">Settings</span>
              </li>
            </ul>
          </nav>

          <div className="sidebar-footer">
            <div className="nutrient-summary">
              <h4 className="summary-title">Today's Summary</h4>
              <div className="nutrient-item">
                <span>Calories</span>
                <span className="nutrient-value">1,200 / 2,000</span>
              </div>
              <div className="nutrient-item">
                <span>Protein</span>
                <span className="nutrient-value">65g / 120g</span>
              </div>
              <div className="nutrient-item">
                <span>Carbs</span>
                <span className="nutrient-value">130g / 250g</span>
              </div>
              <div className="nutrient-item">
                <span>Fat</span>
                <span className="nutrient-value">40g / 65g</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="nutritrack-content">
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meal-tracker" element={<MealTracker />} />
            <Route path="/food-journal" element={<FoodJournal />} />
            {/* Additional routes will be added here as we develop more pages */}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default MainContainer;
