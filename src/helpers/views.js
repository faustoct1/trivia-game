import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Home from './../screens/home'
import Quiz from './../screens/quiz'
import Results from './../screens/results'

class Views {
  static Container = createAppContainer(createStackNavigator({
    Home:         { screen: Home },   //ok
    Quiz:         { screen: Quiz },   //ok
    Results:      { screen: Results }, //ok
  }))

  static reset = async (navigation,routeName) => {
    const resetAction = StackActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: routeName })] })
    //this.props.navigation.dispatch(resetAction);
    navigation.dispatch(resetAction);
  }
}

export default Views
