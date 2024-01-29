import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState();

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <div>
      {count ? "a vida é triste ${count}." : "Tristeza profunda!"}
      <hr />
      <input type="text" value={count} onChange={handleChange} />
    </div>
  )
};

export default App
