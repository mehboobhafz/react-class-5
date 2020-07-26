import React, { useState, useContext,  } from 'react'
import Child from './Child'
import ValueContext from './ValueContext';


function App() {
  let [number, setNumber] = useState(20);
  function increase() {
    setNumber(++number);
  }
  let val = useContext(ValueContext);
  
  return (
    // below is the provider of context and which components are under this provider and their child components all can access this value.. 
    <ValueContext.Provider value = {number}>
    <div>
      <h1>Heading from App Parent</h1>
      <button onClick={() => increase()}>
        Number
      </button>
      <p>number: {number}</p>
      <h3>{val}</h3>
      <hr></hr>
      <Child />


    </div>
    </ValueContext.Provider>
  )
}

export default App;