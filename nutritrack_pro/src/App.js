import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import MainContainer from './containers/MainContainer';
import { NutritionProvider } from './context/NutritionContext';

/**
 * App - Root component for NutriTrack Pro application
 * 
 * Sets up routing and context providers for the application.
 * 
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <NutritionProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<MainContainer />} />
        </Routes>
      </Router>
    </NutritionProvider>
  );
}

export default App;
