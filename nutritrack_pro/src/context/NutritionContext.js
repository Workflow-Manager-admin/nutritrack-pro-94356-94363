import React, { createContext, useReducer, useContext } from 'react';

// Initial state for nutrition data
const initialState = {
  dailyGoals: {
    calories: 2000,
    protein: 120,
    carbs: 250,
    fat: 65,
    water: 8 // glasses
  },
  dailyProgress: {
    calories: 1200,
    protein: 65,
    carbs: 130,
    fat: 40,
    water: 5 // glasses
  },
  meals: [
    {
      id: 1,
      name: 'Breakfast',
      time: '08:00',
      foods: [
        { name: 'Oatmeal', calories: 150, protein: 5, carbs: 27, fat: 2.5 },
        { name: 'Banana', calories: 105, protein: 1.3, carbs: 27, fat: 0.4 }
      ]
    },
    {
      id: 2,
      name: 'Lunch',
      time: '12:30',
      foods: [
        { name: 'Chicken Salad', calories: 350, protein: 25, carbs: 10, fat: 20 },
        { name: 'Whole Grain Bread', calories: 80, protein: 3, carbs: 15, fat: 1 }
      ]
    },
    {
      id: 3,
      name: 'Snack',
      time: '15:00',
      foods: [
        { name: 'Greek Yogurt', calories: 100, protein: 15, carbs: 6, fat: 0 },
        { name: 'Blueberries', calories: 85, protein: 1, carbs: 21, fat: 0.5 }
      ]
    },
    {
      id: 4,
      name: 'Dinner',
      time: '19:00',
      foods: [
        { name: 'Salmon', calories: 200, protein: 22, carbs: 0, fat: 12 },
        { name: 'Brown Rice', calories: 130, protein: 3, carbs: 27, fat: 1 }
      ]
    }
  ],
  weeklyProgress: [
    { day: 'Mon', calories: 1900, goalMet: true },
    { day: 'Tue', calories: 1850, goalMet: true },
    { day: 'Wed', calories: 2100, goalMet: false },
    { day: 'Thu', calories: 1950, goalMet: true },
    { day: 'Fri', calories: 2050, goalMet: false },
    { day: 'Sat', calories: 1800, goalMet: true },
    { day: 'Sun', calories: 0, goalMet: false }
  ]
};

// Action types
const ADD_FOOD = 'ADD_FOOD';
const UPDATE_WATER = 'UPDATE_WATER';
const UPDATE_GOALS = 'UPDATE_GOALS';

// Reducer for nutrition state
const nutritionReducer = (state, action) => {
  switch (action.type) {
    case ADD_FOOD:
      const { mealId, food } = action.payload;
      // Update meals and daily progress
      const updatedMeals = state.meals.map(meal => {
        if (meal.id === mealId) {
          return {
            ...meal,
            foods: [...meal.foods, food]
          };
        }
        return meal;
      });
      
      return {
        ...state,
        meals: updatedMeals,
        dailyProgress: {
          ...state.dailyProgress,
          calories: state.dailyProgress.calories + food.calories,
          protein: state.dailyProgress.protein + food.protein,
          carbs: state.dailyProgress.carbs + food.carbs,
          fat: state.dailyProgress.fat + food.fat
        }
      };
      
    case UPDATE_WATER:
      return {
        ...state,
        dailyProgress: {
          ...state.dailyProgress,
          water: action.payload
        }
      };
      
    case UPDATE_GOALS:
      return {
        ...state,
        dailyGoals: {
          ...state.dailyGoals,
          ...action.payload
        }
      };
      
    default:
      return state;
  }
};

// Create context
const NutritionContext = createContext();

/**
 * NutritionProvider - Provider component for nutrition data
 * 
 * Provides nutrition state and dispatch functions to the component tree.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Provider component
 */
// PUBLIC_INTERFACE
export const NutritionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(nutritionReducer, initialState);
  
  // Define action creators
  const addFood = (mealId, food) => {
    dispatch({
      type: ADD_FOOD,
      payload: { mealId, food }
    });
  };
  
  const updateWaterIntake = (glasses) => {
    dispatch({
      type: UPDATE_WATER,
      payload: glasses
    });
  };
  
  const updateNutritionGoals = (goals) => {
    dispatch({
      type: UPDATE_GOALS,
      payload: goals
    });
  };
  
  return (
    <NutritionContext.Provider 
      value={{
        nutritionData: state,
        addFood,
        updateWaterIntake,
        updateNutritionGoals
      }}
    >
      {children}
    </NutritionContext.Provider>
  );
};

/**
 * useNutrition - Custom hook for accessing nutrition context
 * 
 * @returns {Object} Nutrition context value
 */
// PUBLIC_INTERFACE
export const useNutrition = () => {
  const context = useContext(NutritionContext);
  if (!context) {
    throw new Error('useNutrition must be used within a NutritionProvider');
  }
  return context;
};
