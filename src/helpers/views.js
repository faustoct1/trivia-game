import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import { connect } from 'react-redux';

import Home from './../screens/home'
import Quiz from './../screens/quiz'
import Results from './../screens/results'

let _Quiz     = connect(state => (state))(Quiz);
let _Results  = connect(state => (state))(Results);

class Views {
  static Container = createAppContainer(createStackNavigator({
    Home:         { screen: Home },   //ok
    Quiz:         { screen: _Quiz },   //ok
    Results:      { screen: _Results }, //ok
  }))
  static reset = async (navigation,routeName) => {
    const resetAction = StackActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: routeName })] })
    navigation.dispatch(resetAction);
  }
}

export default Views
