import { useState } from "react";
import Test from "./components/Test";
import './App.css'
import Counter from "./components/Counter";

function App() {
    const [count, setCount] = useState(5);
    const arr = [1,2,3,4,5];
    const fun = ()=>{
        setCount(count+1);
    }
  
  return (
    <>
      <Test x={arr}/>
      <Counter />
      {/* <p>The count is {count}</p>
      <button onClick={fun}>Increase Counter</button> */}
    </>
  )
}

export default App