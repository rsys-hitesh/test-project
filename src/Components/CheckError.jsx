import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorData from "./ErrorHandler";
const CheckError = () => {

    const ErrorHandler = ({error,resetErrorBoundary}) => {
       // console.log("🚀 ~ ErrorHandler ~ error,resetErrorBoundary:", resetErrorBoundary)
        //resetErrorBoundary()
        return (
            <div role="alert">
              <p>An error occurred:</p>
              <pre>{error.message}</pre>
            </div>
          )
    }

    function City({name}) {
        return <div>Hello, visit {name}</div>
    }
    
    function Country({capital}) {
        return <div>Hello, visit {capital}</div>
    }

    
    return (
        <ErrorBoundary fallbackRender={ErrorHandler}
        
        >
        <Country />
        <City />
        <ErrorData/>
        </ErrorBoundary>
      )
}

export default CheckError;