import React from 'react';

// Import Public Routes
import {
   login,
   signup
} from './react-app-routes/public-routes/public-routes';

// import Private Routes
import {

} from './react-app-routes/private-routes/private-routes';

// import Component which do not need lazy load;
import Login from '../pages/log-in/Login';
import SignUp from '../pages/sign-up/SignUp';

console.log('Login', login)
// import Component which need lazy load;


// window tab title
const title = 'boiler-plate';

export const PublicRoutes = [
   {
      path: login,
      element: <Login title={`Login-${title}`} />
   },
   {
      path: signup,
      element: <SignUp />
   }
];

export const PrivateRoute = [];



