import React, { useContext } from 'react';
import ValueContext from './ValueContext';
import Child3 from './Child3';

function Child2(){
    let value = useContext(ValueContext);

    return(
        <div>
            <h1>From child-2</h1>
            <h3>Number: {value}</h3>
            <hr></hr>
            <Child3/>
        </div>
    )

}

export default Child2;