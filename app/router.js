import { StackNavigator, TabNavigator } from 'react-navigation';

import SignUp from './screens/Signup';
import Login from './screens/Login';

import Map from './screens/Map';
import Main from './screens/Main';

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign up',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
});

export const SignedIn = TabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Profile',
    },
  },
});
