import { AppRegistry } from 'react-native';
import NewsScreen from './NewsScreen';
import VideoScreen from './VideoScreen'
import HomeScreen from './HomeScreen'
import AccountScreen from "./AccountScreen"
import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
  
  const RootStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen},
    NewsScreen: { screen: NewsScreen },
    VideoScreen:{screen:VideoScreen},
    AccountScreen:{screen:AccountScreen},
  },
  {
      initialRouteName:'HomeScreen',
  }
  );
const App = createAppContainer(RootStack);
 export default App;
AppRegistry.registerComponent('GoBackProject', () => App);