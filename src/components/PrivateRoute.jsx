import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ allowedRoles }) => {
  const { user, userProfile } = useAuth();

  if (!user) {
    // User is not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && (!userProfile || !allowedRoles.includes(userProfile.role))) {
    // User doesn't have the required role, redirect to unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }

  // User is authenticated and authorized, render the child routes
  return <Outlet />;
};

PrivateRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default PrivateRoute;
