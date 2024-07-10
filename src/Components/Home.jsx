
import React, { useCallback, useState } from 'react';
import Child from './Child';
import { Button } from '@mui/material';

const Home = () => {
const [num,setNum]= useState(1);
const [count,seCount]= useState(1);
const [value,seValue]= useState(1);

const increment = useCallback(()=>{
    console.log("Hello",value)
    seCount(prevcount => prevcount+ value);
},[value]);

//increment()


    return (
        <>
        <h1>Hello</h1>
        <Button onClick={()=>setNum(num+1)} variant='text'>Click</Button>
        <Button onClick={()=>seCount(count+1)} variant='text'>Click Count</Button>
        <Button onClick={increment} variant='text'>Click check</Button>
        
        {/* <Child num={num} onClick={increment}/> */}
        </>
      );
}

export default Home;