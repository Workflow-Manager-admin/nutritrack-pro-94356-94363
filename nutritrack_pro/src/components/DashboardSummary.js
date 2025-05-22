import React from 'react';
import './DashboardSummary.css';

/**
 * DashboardSummary - Component for displaying nutrition summary on the dashboard
 * 
 * Displays a visual summary of daily nutrition metrics including calories,
 * macronutrients, and water intake.
 * 
 * @returns {JSX.Element} The rendered DashboardSummary component
 */
// PUBLIC_INTERFACE
const DashboardSummary = () => {
  return (
    <div className="dashboard-summary">
      <h2 className="summary-heading">Today's Nutrition Summary</h2>
      
      <div className="summary-grid">
        <div className="summary-card">
          <h3 className="card-title">Calorie Goal</h3>
          <div className="calorie-display">
            <div className="calorie-progress-container">
              <div className="calorie-progress" style={{ width: '60%' }}></div>
              <div className="calorie-text">1,200 / 2,000</div>
            </div>
            <div className="calorie-remaining">800 remaining</div>
          </div>
        </div>
        
        <div className="summary-card">
          <h3 className="card-title">Macronutrients</h3>
          <div className="macro-grid">
            <div className="macro-item">
              <div className="macro-heading protein">Protein</div>
              <div className="macro-value">65g</div>
              <div className="macro-bar">
                <div className="macro-progress protein" style={{ width: '55%' }}></div>
              </div>
              <div className="macro-target">Target: 120g</div>
            </div>
            
            <div className="macro-item">
              <div className="macro-heading carbs">Carbs</div>
              <div className="macro-value">130g</div>
              <div className="macro-bar">
                <div className="macro-progress carbs" style={{ width: '52%' }}></div>
              </div>
              <div className="macro-target">Target: 250g</div>
            </div>
            
            <div className="macro-item">
              <div className="macro-heading fats">Fats</div>
              <div className="macro-value">40g</div>
              <div className="macro-bar">
                <div className="macro-progress fats" style={{ width: '62%' }}></div>
              </div>
              <div className="macro-target">Target: 65g</div>
            </div>
          </div>
        </div>

        <div className="summary-card">
          <h3 className="card-title">Water Intake</h3>
          <div className="water-container">
            <div className="water-glasses">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(glass => (
                <div 
                  key={glass} 
                  className={`water-glass ${glass <= 5 ? 'filled' : ''}`}
                >
                  💧
                </div>
              ))}
            </div>
            <div className="water-count">5 of 8 glasses</div>
          </div>
        </div>
        
        <div className="summary-card">
          <h3 className="card-title">Nutrition Insights</h3>
          <ul className="insights-list">
            <li className="insight-item">
              <span className="insight-icon good">✓</span>
              <span className="insight-text">Protein intake on track</span>
            </li>
            <li className="insight-item">
              <span className="insight-icon warning">⚠</span>
              <span className="insight-text">Sugar intake above recommended</span>
            </li>
            <li className="insight-item">
              <span className="insight-icon warning">⚠</span>
              <span className="insight-text">Vitamin D below target</span>
            </li>
            <li className="insight-item">
              <span className="insight-icon good">✓</span>
              <span className="insight-text">Fiber intake excellent</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
