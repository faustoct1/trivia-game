import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Home from './../screens/home'
import Quiz from './../screens/quiz'
import Results from './../screens/results'

class Views {
  static Container = createAppContainer(createStackNavigator({
      Home:         { screen: Home },   //ok
      Quiz:         { screen: Quiz },   //ok
      Results:      { screen: Results } //ok
    },{
    defaultNavigationOptions:{
      headerStyle: {
        //paddingTop: Constants.statusBarHeight,
        //height: Constants.statusBarHeight,
        //height: 60 + Constants.statusBarHeight,
      }
    }
  }))

  static reset(view){
    let resetAction = StackActions.reset({
      key: null, //XXX maybe !
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: view,
          key: Backend.uuid()
        })
      ]
    });
    Views.navigator.dispatch(resetAction);
  }
}

export default Views
