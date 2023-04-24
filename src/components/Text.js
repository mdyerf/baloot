import React from 'react';
import { getClassname } from '../utils/component';

function Text({ children, ...props }) {
  return <p className={getClassname('text', props)}>{children}</p>
}

export default Text;
