import React from 'react'
import Child2 from './Child2'

function Child(props){
    
    
    return(
        <div>
            <h1>From child1</h1>
            <button >
                Increase
            </button>
            <p>number: {props.numb}</p>
            <hr></hr>
            <Child2 numb = {props.numb}/>
        </div>
    )
}

export default Child;