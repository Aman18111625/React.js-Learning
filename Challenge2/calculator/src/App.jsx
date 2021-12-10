import React from 'react';
import {add,sub,div,multi} from './Calc';

const App = () => {
    return (
        <>
 <ul>
   <li>sum of two no is : {add(40,4)}</li>
   <li>sub of two no is : {sub(40,4)}</li>
   <li>div of two no is : {div(40,3)}</li>
   <li>multi of two no is : {multi(40,4)}</li>
 </ul>
 </>
    )
}

export default App;