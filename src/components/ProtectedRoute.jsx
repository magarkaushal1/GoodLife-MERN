// import React from 'react'

// import { useSelector } from 'react-redux';
// import { Navigate, Outlet, useNavigate } from 'react-router-dom'

// export default function ProtectedRoute(props) {

//     const is_logged = useSelector((state) => state.auth.is_logged_in)
//     console.log({ is_logged })
//     const user = useSelector((state) => state.auth.user)


//     if (props.role && (user.role !== props.role)) {
//         return <><h1>Forbidden</h1></>
//     }

//     return is_logged ? <Outlet /> : <Navigate to="/admin/dashboard" />

// }
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is logged in

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) return <Navigate to='/login' />;

        if (role === 'Admin' && localStorage.getItem('role') !== 'Admin') {
          return <Navigate to='/forbidden' />; // Redirect if not an admin
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;