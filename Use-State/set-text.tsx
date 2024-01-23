import React, { useState } from 'react';

const ExampleStringState = () => {
  const [text, setText] = useState('Hello, React!');

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText('New Text')}>Change Text</button>
    </div>
  );
};

export default ExampleStringState;
