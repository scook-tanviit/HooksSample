import React from 'react';
import BB from './BlockBuilderExample/BlockBuilder';
import System from './System';

export default function App() {

  const output = 'Height: ' + BB.getHeight().toString()+ 'width: ' + BB.getWidth().toString() + ' Size: ' + BB.getBlockSize().toString();
  console.log(output);

  return (
    <System>
      <App />
    </System>

  );
}

