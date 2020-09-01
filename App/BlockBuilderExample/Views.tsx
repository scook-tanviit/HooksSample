import {Text} from 'react-native';
import React from 'react';
import View from './View';
import BB from './BlockBuilder';

export default function App() {

  const output = 'Height: ' + BB.getHeight().toString()+ 'width: ' + BB.getWidth().toString() + ' Size: ' + BB.getBlockSize().toString();
  console.log(output);

  return (
    <View size={5} height={2} width={3} color='white'>
      <View size={1} height={1} width={1} color="white" />
      <View size={6} height={1} width={1} color='skyblue'>
        <View size={5} height={1} width={1} color='red'>
          <View size={4} height={1} width={1} color='blue'>
            <View size={3} height={1} width={1} color='green'>
              <View size={2} height={1} width={1} color='purple' >
              <View size={1} height={1} width={1} color='orange' />
              </View>
            </View>
          </View>    
        </View>
      </View>
      <Text>{output}</Text>
    </View>

  );
}

