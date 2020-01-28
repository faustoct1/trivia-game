import React, { Component } from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from "./styles"
import Api from "./../../helpers/api.js"

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index:0,
      data: []
    }
   }
 

  componentDidMount = async () => {
    const {results}   = await Api.quizme()
    const {data} = this.state
    for(let i=0;i<results.length;i++) data.push(results[i])
    this.setState({data:data})
  }

  next = async (answer) => {
    let {data,index}  = this.state
    const current     = data[index]
    current.answered  = answer
    if(++index==data.length){
      this.props.navigation.navigate('Results')
      return
    }
    this.setState({index:index})
  }

  render = () => {
    const {data,index}  = this.state
    const current = data[index]
    if(data.length==0){
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
          <TouchableOpacity style={[styles.button,styles.false]} onPress={()=>this.next(false)}>
            <Text style={styles.buttontitle}>False</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,styles.true]} onPress={()=>this.next(true)}>
            <Text style={styles.buttontitle}>True</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Quiz
