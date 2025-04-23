import React, { useState, useEffect } from 'react';
import FruitItem from './FruitItem';

function FruitList({ fruits, onTotalChange }) {
  const [fruitCounts, setFruitCounts] = useState({});
  const [total, setTotal] = useState(0);

  const handleFruitEaten = (fruitName, count) => {
    setFruitCounts(prev => ({
      ...prev,
      [fruitName]: count
    }));
  };

  useEffect(() => {
    const newTotal = Object.values(fruitCounts).reduce((sum, count) => sum + count, 0);
    setTotal(newTotal);
    onTotalChange(newTotal);
  }, [fruitCounts, onTotalChange]);

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {fruits.map((fruit, index) => (
          <FruitItem 
            key={index} 
            name={fruit} 
            onEat={handleFruitEaten}
          />
        ))}
      </ul>
      <p>Total fruits eaten: {total}</p>
    </div>
  );
}

export default FruitList; 