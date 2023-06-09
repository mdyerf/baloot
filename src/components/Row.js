import React from 'react';
import PropTypes from 'prop-types';
import { getClassname } from '../utils/component';

function Row({ className, justifyContent, alignItems, children, ...props }) {
  return (
    <div style={{ justifyContent, alignItems }} className={getClassname('row', props, className)}>
      {children}
    </div>
  );
}

Row.propTypes = {
  className: PropTypes.string.isRequired,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Row.defaultProps = {
  justifyContent: null,
  alignItems: null,
};

export default Row;
