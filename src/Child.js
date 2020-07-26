import React, { useContext } from 'react'
import Child2 from './Child2'
import ValueContext from './ValueContext';

function Child(){
    
    
    return(
        <div>
            <h1>From child1</h1>
            
            <p>number:{useContext(ValueContext)} </p>
            <hr></hr>
            <Child2/>
        </div>
    )
}

export default Child;