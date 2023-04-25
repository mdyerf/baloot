import React from 'react';
import PropTypes from 'prop-types';

function Page({ children }) {
  return <div className="page-container">{children}</div>;
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
