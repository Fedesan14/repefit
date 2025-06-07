import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/signup';
import Signin from './src/screens/signin';
import { Provider } from 'react-redux';
import { store } from './src/app/store/store';
import Toast from 'react-native-toast-message';
import Home from './src/screens/home';

const RootStack = createNativeStackNavigator({
  screens: {
    Signin: Signin,
    Signup: Signup,
    Home: Home
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Toast />
    </Provider>
  )
}
