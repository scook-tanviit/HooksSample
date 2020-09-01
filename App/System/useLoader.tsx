import * as React from 'react';
import { samLoader } from '../domains/sample';
import { SamLoader } from '../Domains/sample/SamLoader';

export const useLoader = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const loadData = React.useCallback(async () => {
    var newData = {
      sample: {},
    };
    var errorData = {
      errors: [],
      errorFlags: [],
    }
  

    try {
      newData.sample = await SamLoader(errorData);
      evalErrors(errorData, newData);


      //Next item in the load chain.
    } catch (e) {
      evalErrors(errorData, e);
      //TODO: Setup and alert somehow about potential missing data.
      newData.error = e;
    } finally {

      setData(newData);
      //Clean up things like 
      SplashScreen.hideAsync();
    }
  }, [setData]);

  if (data == null && loading === false) {
    setLoading(true);
    loadData();
  }

  return { data };
};
