import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/signup';

const RootStack = createNativeStackNavigator({
  screens: {
    Signup: Signup,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />
}
