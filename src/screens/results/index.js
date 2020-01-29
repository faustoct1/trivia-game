import React, { Component } from 'react'
import {ActivityIndicator, Text, View, TouchableOpacity, FlatList} from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import styles from "./styles"
import Views from "./../../helpers/views"
import Loading from "./../loading"

class Results extends Component {
  static navigationOptions = {
    headerLeft: null,
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <AntDesign name={item.iconname} size={32} color={item.iconcolor} />
        <Text style={{width:'85%',margin:5,marginBottom:15, flexWrap:'wrap'}}>{item.question}</Text>
      </View>
    )
  }
  
  render = () => {
    const {quiz}  = this.props
    const {list}  = quiz

    if(list.length==0){
      return <Loading />
    }

    const {score} = quiz

    return (
      <View style={styles.container}>
        <Text style={styles.title}>You scored{'\n'}{score}/10</Text>
        <FlatList data={list} renderItem={this.renderItem} />
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

