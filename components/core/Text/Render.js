import React from 'react';

export default function render(options = {}) {
  const { onLoadMore, children, style } = options;

  return (
    <div style={options.style}>
      {children}
    </div>
  );
}
