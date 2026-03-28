import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser, hasRole } from '../../utils/auth';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!hasRole(allowedRoles)) {
    // If user doesn't have the specific role, redirect them to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
