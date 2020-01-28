import React, { Component } from 'react'
import {Text, View, TouchableOpacity} from 'react-native';
import styles from "./styles";

class Home extends Component {
  render = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the{'\n'}Trivia Challenge!</Text>
      <Text style={styles.explanation}>You will be presented with 10 True or False questions.</Text>
      <Text style={styles.explanation}>Can you score 100%?</Text>
      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Quiz')}>
        <Text style={styles.buttontitle}>BEGIN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

/*
const home = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to the{'\n'}Trivia Challenge!</Text>
    <Text style={styles.explanation}>You will be presented with 10 True or False questions.</Text>
    <Text style={styles.explanation}>Can you score 100%?</Text>
    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Quiz')}>
      <Text style={styles.buttontitle}>BEGIN</Text>
    </TouchableOpacity>
  </View>
)

export default home
*/
