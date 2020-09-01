import React from 'react';
import { ErrorContext, errorFlagList } from './Context';
import { ErrorDomainStruct } from '../../types/system';
import { Provider } from './Provider';


const defaultErrorState: ErrorDomainStruct = {
  errors: [],
  errorFlags: [],
}

const errorReducer = (state:any, action:any) => {
  if (action) console.log('do stuff');
  return state;
}
/**
  Not yet implemented  Not sure why react types are not showing up...
*/
export const ErrorBoundary = ({ children }: { children: any }) => {

  //Note sure how to handle this, or if we should do some form of try catch or something.
  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   console.log({ error });
  //   return { hasError: true };
  // }

  //Additional elements to catch errors and prevent system crashes (red screens in dev).

  const [state, dispatch] = React.useReducer(errorReducer, defaultErrorState);

  const errorContext = ErrorContext;

  return (
    <ErrorContext.Provider value={{ dispatch, state }}>
      {children}
    </ErrorContext.Provider>
  );
}

export const ErrorEvaluator = ({ children }) => {
  
  //PERFORM any actions to update error flags that came from the loader/or dispatches.

  return (
    {children}
  )
} 