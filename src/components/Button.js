import React from 'react';
import PropTypes from 'prop-types';
import { getClassname } from '../utils/component';

function Button({ text, onClick, ...props }) {
  return (
    <div className={getClassname('button', props)} onClick={onClick}>
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
