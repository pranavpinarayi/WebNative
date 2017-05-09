import React from 'react';
import {
  Image,
} from 'react-native';

export default function render(options = {}) {
  let { style, source } = options;

  return (
    <Image style={style} source={source}/>
  );
}
