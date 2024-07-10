import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@mui/material';
import { useErrorBoundary } from 'react-error-boundary';

const ErrorData = () => {
  console.log("Parent");
  const [add,setAdd] = useState(0);
  const [count,setCount]= useState(0);
  const {showBoundary} = useErrorBoundary();

  const increment = useCallback(() => {
    console.log(add);
    setAdd(previs => previs+1)
  },[count]);

  const handleSrt = () => {
    const nPromise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        reject("Success");
      }, 1000);
    });
    return nPromise;
  }


  useEffect(()=>{
    handleSrt()
    .then((res) => {
      //console.log("res",res)
    })
    .catch((error)=>{
     // console.log("error",error);
      showBoundary(error)
    })

  });


  return (
    <>
    <>About:{add}</>
    <br/>
    <Button variant='text' onClick={increment}>Add</Button>
    <br/>
    <>Count : {count}</>
    <br/>
    <Button variant='text' onClick={() => setCount(count+1)}>Count</Button>

    </>
  )
};

export default ErrorData;
