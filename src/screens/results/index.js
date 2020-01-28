import React, { Component } from 'react'
import {Text, View, TouchableOpacity, FlatList} from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import styles from "./styles"
import Views from "./../../helpers/views"

class Results extends Component {
  state = {
    score: 0,
    quiz: []
  }

  static navigationOptions = {
    headerLeft: null
  }

  componentDidMount = async () => {
    const quiz = this.props.navigation.getParam('quiz')
    let score = 0
    for(let i=0;i<quiz.length;i++){
      if(quiz[i].correct_answer==quiz[i].answered) {
        quiz[i].iconname="checkcircle"
        quiz[i].iconcolor="green"
        score++
      } else {
        quiz[i].iconname="closecircle"
        quiz[i].iconcolor="red"
      }
    }
    this.setState({score:score,quiz:quiz})
  }

  /*renderItem = ({ item }) => (
    <React.Fragment>
      <View style={[styles.item]}>
        <AntDesign name={item.iconname} size={32} color={item.iconcolor} />
        <Text style={{margin:5,marginBottom:15}}>{item.question}</Text>
      </View>
    </React.Fragment>
  );*/

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <AntDesign style={{top:7}} name={item.iconname} size={32} color={item.iconcolor} />
        <Text style={{width:'85%',margin:5,marginBottom:15, flexWrap:'wrap'}}>{item.question}</Text>
      </View>
    )
  }
  
  render = () => {
    const {score,quiz} = this.state

    if(quiz.length==0){
      return (
        <View style={styles.container}>
          <Text style={styles.txt}>Computing results...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>You scored{'\n'}{score}/10</Text>
        <FlatList data={this.state.quiz} renderItem={this.renderItem} />
        <TouchableOpacity style={styles.button} onPress={()=>this.playAgain()}>
          <Text style={styles.buttontitle}>PLAY AGAIN?</Text>
        </TouchableOpacity>
      </View> 
    )
  }
  
  playAgain = async () => {
    Views.reset(this.props.navigation,'Quiz')
  }
}

export default Results

