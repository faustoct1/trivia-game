import React, { Component } from 'react'
import {Text, View, TouchableOpacity, FlatList} from 'react-native'
import styles from "./styles"

import { StackActions, NavigationActions } from 'react-navigation';

class Results extends Component {
  static navigationOptions = {
    headerLeft: null
  }

  constructor(props) {
    super(props)
   }
 
  componentDidMount = async () => {
  }

  renderItem = ({ item }) => (
    <React.Fragment>
      <AntDesign name="checkcircle" size={32} color="green" />
      <Text>{item.question}</Text>
    </React.Fragment>
  );
  
  render = () => (
    <View style={styles.container}>
      <Text style={styles.title}>You scored{'\n'}3/10</Text>
      <FlatList data={[]} renderItem={this.renderItem} />
      <TouchableOpacity style={styles.button} onPress={()=>this.playAgain()}>
        <Text style={styles.buttontitle}>PLAY AGAIN?</Text>
      </TouchableOpacity>
    </View>
  );
  
  playAgain = async () => {
    const resetAction = StackActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Quiz' })] })
    this.props.navigation.dispatch(resetAction);
  }
}

export default Results

