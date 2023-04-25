import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from './routes';

function ProtectedRoute({ user, children }) {
  if (!user) return <Navigate to={routes.login} />;

  return children;
}

ProtectedRoute.propTypes = {
  user: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
