import React, { Component } from 'react'
import {Text, View, TouchableOpacity, Alert} from 'react-native'
import { connect } from 'react-redux'
import styles from "./styles"
import Views from "./../../helpers/views"

import * as quizactions from './../../redux/actions/quiz'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity style={{marginLeft:5,padding:10}} onPress={()=>(
          Alert.alert(
            'Trivia Challange',
            'Would you like to restart?',
            [
              { text: 'No', onPress: () => null, style: 'cancel' },
              {text: 'Yes', onPress: () => Views.reset(navigation,'Quiz')},
            ],
            {cancelable: false},
          )
        )}>
          <Text style={{color:'#777'}}>Restart</Text>
        </TouchableOpacity>
      )
    }
  }

  componentDidMount = async () => {
    this.props.load()
  }
  
  componentDidUpdate = () => {
    const {quiz} = this.props
    if (quiz.index === 10) {  
      this.props.navigation.navigate('Results',{quiz:quiz})
    }
  }

  render = () => {
    const {quiz}  = this.props
    const {index} = quiz

    if(index==10) return null

    const {list}  = quiz
    const current = list[index]
    
    if(list.length==0){
      return (
        <View style={styles.container}>
          <Text style={styles.txt}>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{current.category}</Text>
        <View style={styles.box}>
          <Text style={styles.txt}>{current.question}</Text>
        </View>
        <Text>{index+1} of 10</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button,styles.false]} onPress={()=>this.props.next('False')}>
            <Text style={styles.buttontitle}>False</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,styles.true]} onPress={()=>this.props.next('True')}>
            <Text style={styles.buttontitle}>True</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load:   ()  => dispatch(quizactions.load()),
    next:   (payload)  => dispatch(quizactions.next(payload)),
    score:  ()  => dispatch(quizactions.score())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Quiz)

