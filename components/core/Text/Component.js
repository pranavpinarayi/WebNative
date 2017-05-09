import React from 'react';
import PropTypes from 'prop-types';
import Render from './Render';

class Text extends React.Component {
  static propTypes = {
    styles: PropTypes.shape({}),
    children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const options = this.props;

    return Render.bind(this)(options);
  }

}

export default Text;
