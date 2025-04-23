import React, { useState } from 'react';
import FruitList from './components/FruitList';

function App() {
  const [totalFruits, setTotalFruits] = useState(0);
  // This is the goal for the number of fruits to be eaten per day
  const goal = 5;

  const handleTotalChange = (newTotalFruits) => {
    setTotalFruits(newTotalFruits);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>🍎 Healthy Eating Tracker</h1>
      <FruitList 
        fruits={["Feijoa", "Apple",  "Avocado"]} 
        onTotalChange={handleTotalChange} 
      />
    </div>
  );
}

export default App; 