import React from 'react';

export default function render(options = {}) {
  let { source, style } = options;
  if (typeof (source) == 'object') {
    source = source.uri;
  }

  return (
    <img src={source} style={style} />
  );
}
