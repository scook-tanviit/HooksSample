import * as React from 'react';

import { Loader } from './Loader';
import {ErrorBoundary} from './ErrorBoundary';

export const Runner = ({ children }: any) => {
  return (
    <ErrorBoundary>
      <Loader>{children}</Loader>
    </ErrorBoundary>
  );
};

export default Runner;
