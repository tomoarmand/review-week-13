import React, { useState } from 'react';

function FruitItem({ name, onEat }) {
  const [count, setCount] = useState(0);

  const handleEat = () => {
    const newCount = count + 1;
    setCount(newCount);
    onEat(name, newCount);
  };


  return (
    <li style={{ margin: '10px 0' }}>
      <span>{name}: </span>
      <button onClick={handleEat}>Eat one</button>
      <span> You have eaten {count} {name.toLowerCase()}s.</span>
    </li>
  );
}

export default FruitItem; 