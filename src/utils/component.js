export const getClassname = (name, props) =>
  `${name} ` + Object.keys(props).map(k => `${name}--${k}-${props[k]}`).join(' ');