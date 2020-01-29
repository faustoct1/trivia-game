import React from 'react'
import {Text, View, ActivityIndicator} from 'react-native';
import styles from "./styles";

const Loading = () => (
  <View style={[styles.container]}>
    <ActivityIndicator size="large" color="#aaa" />
    <Text style={styles.txt}>Loading Quiz</Text>
  </View>
)

export default Loading
