import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './MainContainer.css';

// Import pages
import Dashboard from '../pages/Dashboard';

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
              <li className="nav-item active">
                <span className="nav-icon">📊</span>
                <span className="nav-text">Dashboard</span>
              </li>
              <li className="nav-item">
                <span className="nav-icon">🍽️</span>
                <span className="nav-text">Meal Tracker</span>
              </li>
              <li className="nav-item">
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
          {/* Outlet for react-router to render nested routes */}
          <Outlet />
          
          {/* Placeholder content when no route is matched */}
          <div className="dashboard-placeholder">
            <h2 className="section-title">Your Nutrition Dashboard</h2>
            <p className="section-description">
              Track your daily nutrition, set goals, and monitor your progress towards a healthier lifestyle.
            </p>
            
            <div className="dashboard-widgets">
              <div className="widget">
                <h3 className="widget-title">Daily Calorie Intake</h3>
                <div className="widget-content">
                  <div className="calorie-meter">
                    <div className="calorie-progress" style={{ width: '60%' }}></div>
                    <span className="calorie-text">1,200 / 2,000 cal</span>
                  </div>
                </div>
              </div>
              
              <div className="widget">
                <h3 className="widget-title">Macronutrient Breakdown</h3>
                <div className="widget-content macronutrient-chart">
                  <div className="chart-placeholder">
                    <div className="chart-segment protein" style={{ width: '30%' }}>P</div>
                    <div className="chart-segment carbs" style={{ width: '50%' }}>C</div>
                    <div className="chart-segment fat" style={{ width: '20%' }}>F</div>
                  </div>
                  <div className="chart-legend">
                    <span className="legend-item protein">Protein: 30%</span>
                    <span className="legend-item carbs">Carbs: 50%</span>
                    <span className="legend-item fat">Fat: 20%</span>
                  </div>
                </div>
              </div>
              
              <div className="widget">
                <h3 className="widget-title">Water Intake</h3>
                <div className="widget-content">
                  <div className="water-tracker">
                    <div className="water-icons">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <span 
                          key={item} 
                          className={`water-icon ${item <= 5 ? 'filled' : ''}`}
                        >
                          💧
                        </span>
                      ))}
                    </div>
                    <div className="water-text">5 of 8 glasses</div>
                  </div>
                </div>
              </div>

              <div className="widget">
                <h3 className="widget-title">Weekly Progress</h3>
                <div className="widget-content">
                  <div className="weekly-chart">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <div key={day} className="chart-column">
                        <div 
                          className="chart-bar" 
                          style={{ height: `${[70, 65, 80, 75, 60, 40, 0][index]}%` }}
                        ></div>
                        <div className="chart-label">{day}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainContainer;
