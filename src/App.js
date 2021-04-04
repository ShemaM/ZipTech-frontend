import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreens/OverViewScreen';
import LoginScreen from './screens/AuthenticationScreens/LoginScreen';
import ForgetPasswordScreen from './screens/AuthenticationScreens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/AuthenticationScreens/ResetPasswordScreen';
import PrivateRoute from './screens/authentication/ProtectRoute';

function App() {
  return (
    <Router>
      <Route path='/login' component={LoginScreen} />
      <Route path='/forgot' component={ForgetPasswordScreen} />
      <Route path='/user/reset' component={ResetPasswordScreen} />
      <PrivateRoute path='/dashboard' exact component={DashboardScreen} />
    </Router>
  );
}

export default App;
