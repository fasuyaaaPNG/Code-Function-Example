import React, { useState } from 'react';

const ExampleArrayState = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, 'New Fruit'])}>Add Fruit</button>
    </div>
  );
};

export default ExampleArrayState;
