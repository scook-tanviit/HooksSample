import React from 'react';

//Note that we should have 1 type of error for each type probably, to clearly identify error methodoloties.

export enum errorFlagList {
  system,
  network,
  permission,
}

export const ErrorContext = React.createContext<ErrorContextType>({
  name: 'error',
  errorFlags: [],
  errors: []
});
export const HookContext = React.createContext<HooksContextType>({
  name: 'hooks',
});
