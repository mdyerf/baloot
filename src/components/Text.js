import React from 'react';
import PropTypes from 'prop-types';
import { getClassname } from '../utils/component';

function Text({ className, children, ...props }) {
  return <p className={getClassname('text', props, className)}>{children}</p>;
}

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  className: null,
};

export default Text;
