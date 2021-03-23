import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreens/OverViewScreen';
import LoginScreen from './screens/AuthenticationScreens/LoginScreen';
import ForgetPasswordScreen from './screens/AuthenticationScreens/ForgotPasswordScreen';
import RedictLoginScreen from './screens/AuthenticationScreens/RedictLoginScreen';
import ResetPasswordScreen from './screens/AuthenticationScreens/ResetPasswordScreen';

function App() {
  return (
    <Router>
      <Route path='/login' component={LoginScreen} />
      <Route path='/forgot' component={ForgetPasswordScreen} />
      <Route path='/user/reset' component={ResetPasswordScreen} />
      <Route path='/password_reset' component={RedictLoginScreen} />
      <Route path='/dashboard' component={DashboardScreen} />
    </Router>
  );
}

export default App;
