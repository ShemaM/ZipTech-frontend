/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, useHistory } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path }) => {
  const history = useHistory();
  const token = localStorage.getItem('userData');
  console.log('xxxxxxxxxxxxxx', token);
  return (
    <Route
      path={path}
      exact
      render={() => (token ? <Component /> : history.push('/unauthorized'))}
    />
  );
};
export default PrivateRoute;
