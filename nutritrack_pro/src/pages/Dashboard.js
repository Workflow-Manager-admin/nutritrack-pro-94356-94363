import React from 'react';
import './Dashboard.css';
import DashboardSummary from '../components/DashboardSummary';
import { useNutrition } from '../context/NutritionContext';

/**
 * Dashboard - Main dashboard page for NutriTrack Pro
 * 
 * Displays nutrition summary, recent meals, and activity.
 * 
 * @returns {JSX.Element} The rendered Dashboard component
 */
// PUBLIC_INTERFACE
const Dashboard = () => {
  const { nutritionData } = useNutrition();
  
  return (
    <div className="dashboard-page">
      <h1 className="page-title">Your Nutrition Dashboard</h1>
      <p className="page-description">
        Track your daily nutrition, set goals, and monitor your progress towards a healthier lifestyle.
      </p>
      
      <DashboardSummary />
      
      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2 className="section-title">Today's Meals</h2>
          <div className="meals-container">
            {nutritionData.meals.map(meal => (
              <div key={meal.id} className="meal-card">
                <div className="meal-header">
                  <h3 className="meal-title">{meal.name}</h3>
                  <span className="meal-time">{meal.time}</span>
                </div>
                <ul className="meal-foods">
                  {meal.foods.map((food, index) => (
                    <li key={index} className="food-item">
                      <span className="food-name">{food.name}</span>
                      <span className="food-calories">{food.calories} cal</span>
                    </li>
                  ))}
                </ul>
                <div className="meal-footer">
                  <button className="add-food-btn">+ Add Food</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="dashboard-section">
          <h2 className="section-title">Weekly Progress</h2>
          <div className="progress-card">
            <div className="progress-chart">
              {nutritionData.weeklyProgress.map(day => (
                <div key={day.day} className="chart-day">
                  <div className="chart-column-container">
                    <div 
                      className={`chart-column ${day.goalMet ? 'goal-met' : ''}`} 
                      style={{ height: `${(day.calories / 2500) * 100}%` }}
                    ></div>
                  </div>
                  <div className="chart-label">{day.day}</div>
                </div>
              ))}
            </div>
            <div className="progress-legend">
              <div className="legend-item">
                <span className="legend-color goal-met"></span>
                <span className="legend-text">Goal Met</span>
              </div>
              <div className="legend-item">
                <span className="legend-color"></span>
                <span className="legend-text">Goal Not Met</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
