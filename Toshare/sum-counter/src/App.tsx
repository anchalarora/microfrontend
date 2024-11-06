import { useState } from "react";
import "./App.css";

function App() {
  const [sum, setSum] = useState(0);
  return (
    <div className="App">
      <h1>{"sum counter"}</h1>
      <h1>{"Counter " + sum}</h1>
      <button onClick={() => setSum(sum + 1)}>Increment</button>
      <button onClick={() => setSum(sum - 1)}>Decrement</button>
    </div>
  );
}

export default App;
