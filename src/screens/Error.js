import React from 'react';
import PropTypes from 'prop-types';

function ErrorPage({ status }) {
  return <div>This is ErrorPage {status}</div>;
}

ErrorPage.propTypes = {
  status: PropTypes.number.isRequired,
};

export default ErrorPage;
