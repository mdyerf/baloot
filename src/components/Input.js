import React from 'react';
import PropTypes from 'prop-types';
import { getClassname } from '../utils/component';

function Input({ value, onChange, placeholder, type, ...props }) {
  return (
    <input
      className={getClassname('input', props)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};

export default Input;
