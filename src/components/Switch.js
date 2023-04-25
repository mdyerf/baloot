import React from 'react';
import PropTypes from 'prop-types';

function Switch({ active, onChange }) {
  return (
    <div onClick={() => onChange(!active)} className={`switch ${active ? 'active' : null}`}>
      <div className="switch__bg" />
      <div className="switch__toggle" />
    </div>
  );
}

Switch.propTypes = {
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Switch;
