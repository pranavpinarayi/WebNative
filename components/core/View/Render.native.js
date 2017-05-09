import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function render(options = {}) {
  let { style, children } = options;

  if (options.onClick)return (
    <TouchableOpacity style={style} onPress={options.onClick}>
      {children}
    </TouchableOpacity>
  );

  return (
    <View style={style}>
      {children}
    </View>
  );
}
