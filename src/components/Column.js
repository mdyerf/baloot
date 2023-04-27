import React from 'react';
import PropTypes from 'prop-types';
import { getClassname } from '../utils/component';

function Column({ justifyContent, alignItems, children, ...props }) {
  return (
    <div style={{ justifyContent, alignItems }} className={getClassname('column', props)}>
      {children}
    </div>
  );
}

Column.propTypes = {
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Column.defaultProps = {
  justifyContent: null,
  alignItems: null,
};

export default Column;
