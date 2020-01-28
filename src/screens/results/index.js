import React, { Component } from 'react'
import {Text, View, TouchableOpacity, FlatList} from 'react-native'
import styles from "./styles"
import Views from "./../../helpers/views"

class Results extends Component {
  static navigationOptions = {
    headerLeft: null
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
    Views.reset(this.props.navigation,'Quiz')
  }
}

export default Results

