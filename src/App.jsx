import "./App.css";
import NewCompo from "./components/NewCompo";
import logo from "./logo.svg";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(() => 4)

  function decrement(){
    setCounter(prev => prev-1 )
  }
  function incrment(){
    setCounter(prev => prev+1 )
  }

  return (
    <div className="App" role="main">
      <article className="App-article">
        <h3>Welcome to React!</h3>
  
        <button onClick={incrment}>+</button>
        <span>{counter}</span>
        <button onClick={decrement}>-</button>

        <NewCompo />
      </article>
    </div>
  );
}

export default App;
