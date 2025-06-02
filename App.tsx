import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/signup';
import Signin from './src/screens/signin';
import { Provider } from 'react-redux';
import { store } from './src/app/store/store';

const RootStack = createNativeStackNavigator({
  screens: {
    Signin: Signin,
    Signup: Signup,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
