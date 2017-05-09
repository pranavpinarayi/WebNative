import React from 'react';
import {
  Text,
} from 'react-native';

export default function render(options = {}) {
  let { style, children } = options;

  return (
    <Text style={style}>
      {children}
    </Text>
  );
}
