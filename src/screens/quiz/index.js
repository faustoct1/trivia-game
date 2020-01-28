import React, { Component } from 'react'
import {Text, View, TouchableOpacity, Alert} from 'react-native'
import { connect } from 'react-redux'
import styles from "./styles"
import Api from "./../../helpers/api"
import Views from "./../../helpers/views"

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

  state = {
    index:0,
    quiz:[]
  }

  componentDidMount = async () => {
    const {results}   = await Api.quizme()
    this.setState({quiz:results})
  }

  next = async (answer) => {
    let {quiz,index}  = this.state
    const current     = quiz[index]
    current.answered  = answer
    if(++index==quiz.length){
      this.props.navigation.navigate('Results',{quiz:quiz})
      return
    }
    this.setState({index:index})
  }

  render = () => {
    const {quiz,index}  = this.state
    const current = quiz[index]
    if(quiz.length==0){
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
          <TouchableOpacity style={[styles.button,styles.false]} onPress={()=>this.next('False')}>
            <Text style={styles.buttontitle}>False</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,styles.true]} onPress={()=>this.next('True')}>
            <Text style={styles.buttontitle}>True</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    quiz: state.quiz
  }
}

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Increase Counter
    quiz: () => dispatch({type:bool})
  };
};

export default Quiz
//export default connect()(Quiz)
//export default connect(mapStateToProps,mapDispatchToProps)(Quiz)

