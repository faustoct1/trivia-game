import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    fontSize: 20,
    padding: 5,
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 250, 
    borderColor: '#3897f0', 
    borderWidth: 1, 
    backgroundColor: '#3897f0', 
    borderRadius: 5,
    color: '#fff',
    height:40
  },
  buttontitle:{
    fontWeight: 'bold', 
    color: '#fff', 
    fontSize: 18
  },
  container: {
    flex:1,
    margin:10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection:'column',
  },
  explanation:{
    textAlign:'center',
    fontSize:24
  },
  title: {
    textAlign:'center',
    fontWeight:'bold',
    fontSize:32
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    width: 400,
    height: 400
  },
  question: {
    textAlign: "center"
  }
});
