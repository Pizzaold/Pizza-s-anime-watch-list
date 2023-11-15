import React, { useState } from 'react';
import './App.css';


function MyButton({ title, onClick }: { title: string, onClick: () => void }) {
  return (
    <button onClick={onClick}>{title}</button>
  );
}

function App() {
  const [a, setA] = useState(0);

  const handleButtonClick = () => {
    setA(a + 1);
  };

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" onClick={handleButtonClick}/>
      <p>{a}</p>
    </div>
  );
}

export default App;
