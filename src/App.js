import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreens/OverViewScreen';
import LoginScreen from './screens/AuthenticationScreens/LoginScreen';
import ForgetPasswordScreen from './screens/AuthenticationScreens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/AuthenticationScreens/ResetPasswordScreen';
import ForgotPassRedirectionScreen from './screens/AuthenticationScreens/ForgotPassRedirectionScreen';
import ProductListScreen from './screens/DashboardScreens/ProductListScreen';
import ProductCreateScreen from './screens/DashboardScreens/ProductCreateScreen';
import PrivateRoute from './screens/authentication/ProtectRoute';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LoginScreen} />
      <Route exact path='/forgot' component={ForgetPasswordScreen} />
      <Route exact path='/user/reset' component={ResetPasswordScreen} />
      <Route exact path='/product' component={ProductListScreen} />
      <Route exact path='/product_create' component={ProductCreateScreen} />
      <Route
        exact
        path='/forgotmessage'
        component={ForgotPassRedirectionScreen}
      />
      <PrivateRoute exact path='/dashboard' e component={DashboardScreen} />
    </Router>
  );
}

export default App;
