import { View } from 'react-native';
import BlockBuilder from './BlockBuilder';
import React from 'react';

const _View = ({size, height, width, color, children}:{[key:string]:any, size:number, height:number, width:number}) =>{

  var _height = size* height* BlockBuilder.getBlockSize();
  var _width = size* width* BlockBuilder.getBlockSize();

  return (
    <View style={{height:_height, width:_width, backgroundColor: color }}>{children}</View>
  )

};

export default _View;