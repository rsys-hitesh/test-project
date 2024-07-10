import React, { useCallback, useMemo } from 'react';
const Child = ({num,onClick}) => {
console.log('Child',num);
 
const result  = useMemo(()=>{
console.log("useMemo",num)
return num + Math.random()
},[num]);

const resulrCall =  useCallback(()=>{
return 'test';
},[num]);

resulrCall();

return (
    <h1>Child: {result}</h1>
    )
    
}

export default Child;