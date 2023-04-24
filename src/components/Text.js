import React from 'react';
import { getClassname } from '../utils/component';

function Text({ className, children, ...props }) {
  return <p className={getClassname('text', props, className)}>{children}</p>
}

export default Text;
