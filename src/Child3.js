import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child3(){
    let v = useContext(ValueContext);
    function iv (){
       return ++v
    }
    
    return(
        <div>
            <h3>From child-3</h3>
            <p>new number: {v}</p>
            <h4>{v}</h4>
        </div>
    )

}

export default Child3;