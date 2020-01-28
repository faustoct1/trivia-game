import React, { Component } from 'react'
import {Text, View, TouchableOpacity} from 'react-native';
import styles from "./styles";

class Home extends Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Trivia Challenge!</Text>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
        <TouchableOpacity style={styles.button}>
          <Text>BEGIN</Text>
        </TouchableOpacity>
      </View>
      );
  }
}

export default Home
