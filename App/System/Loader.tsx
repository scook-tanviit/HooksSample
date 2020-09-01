import * as React from 'react';

import { useLoader } from './useLoader';
import { Provider } from './Provider';
import { ErrorEvaluator } from './ErrorBoundary';


export const Loader = ({ children }) => {
  const { data } = useLoader();
  if (data === undefined || data == null) {
    return null;
  } else {
    return (
        <Provider data={data}>
          <ErrorEvaluator>
            {children}
          </ErrorEvaluator>
      </Provider>
    );
  }
};
