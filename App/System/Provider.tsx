import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import { HookContext } from './Context';
import { authReducer } from '../domains/auth/reducer';
enableScreens();

export const Provider = ({ children, data }) => {

  const [samData, samDispatch] = React.useReducer(samReducer, data.sam);

  const hookData = {
    name: 'hooks',
    sam: {
      data: samData,
      dispatch: samDispatch,
    },
    //Additional elements here.
  };

  return (
    <HookContext.Provider value={hookData}>{children}</HookContext.Provider>
  );
};
