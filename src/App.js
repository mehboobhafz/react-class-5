import React, { useState } from 'react'
import Child from './Child'


function App() {
  let [number, setNumber] = useState(20);
  function increase() {
    setNumber(++number);
  }
  return (
    <div>
      <h1>Heading from App Parent</h1>
      <button onClick={() => increase()}>
        Number
      </button>
      <p>number: {number}</p>
      <hr></hr>
      <Child numb={number} name="Mehboobs" />


    </div>
  )
}

export default App;