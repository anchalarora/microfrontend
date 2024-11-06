import { useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState(1);

  return (
    <div className="App">
      <h1>{"Product " + product}</h1>
      <button onClick={() => setProduct(product * 2)}>Multiply</button>
      <button onClick={() => setProduct(product / 2)}>Divide</button>
    </div>
  );
}

export default App;
