import React from 'react';
import { useState } from 'react'

function NameList() {
  const [list, setList] = useState(["john", "Noah", "Mathew", "David", "Luke"]);
  const [name, setName] = useState(()=>"Mark");
  const addName = () =>{
    setList([...list, name]);
    setName("");
  }
  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}> {name}</li>
          ))}
      </ul>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={addName}
      >AddName</button>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(10);
  function addOne() {
    setCount(count+ 1)
  }
  return (
    <div className="App">
      <button onClick={addOne}>Count ={count }</button>
    </div>
  )
}

function App() {
  return (
    <>
      <Counter />
     <NameList/>
    </>
  )
}
export default App
