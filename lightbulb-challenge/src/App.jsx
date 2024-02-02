// App.js
import { useState } from 'react';
import './App.css';
import Lightbulb from './Lightbulb';

function App() {
  const initialColor = 'black'
  const [color, setColor] = useState(initialColor)
  const handleChange = event => {
    setColor(event.target.value)
  };

  const onColor = "yellow"
  const offColor = "black"

  return (
    <div className="app">
    <Lightbulb fillColor={color} />
    <button value{...onColor} onClick={handleChange}>
        ON
    </button>
  
    <button value{...offColor} onClick={handleChange}>
        OFF
    </button>
    </div>
  )
};

export default App



