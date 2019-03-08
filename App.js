import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignupScreen from './src/screens/SignupScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

const App = createStackNavigator({
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  Signup:     { screen: SignupScreen },
  Login:      { screen: LoginScreen },
  MemoEdit:   { screen: MemoEditScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#265356',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);
