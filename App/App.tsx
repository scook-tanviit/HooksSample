import { Text } from 'react-native';



export const App = () => {
  const { data: { myVar }, myFunction } = useSample();


  if (myVar === null) myFunction(); //This MUST be in the top level, no if statements, no sub functions, etc.  As per all hooks.

  <Text> HEYA   {myVar} </Text>
}