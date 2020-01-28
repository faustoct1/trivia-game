import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex:1,
    margin:10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection:'column',
  },
  title:{
    fontWeight:'bold'
  },
  box: {
    padding:10,
    flex:0.5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  txt: {
    textAlign: "center",
    fontSize: 16
  },
  buttons:{
    flexDirection:'row',
    alignItems:'center',
  },
  button: {
    margin:10,
    padding: 25,
    alignItems: 'center', 
    justifyContent: 'center', 
    flex:1,
    borderRadius: 5,
    color: '#fff',
    margin:10
  },
  false:{
    borderColor: 'red', 
    borderWidth: 1, 
    backgroundColor: 'red'    
  },
  true:{
    borderColor: '#25D366', 
    borderWidth: 1, 
    backgroundColor: '#25D366'    
  },
  buttontitle:{
    fontWeight: 'bold', 
    color: '#fff', 
    fontSize: 24
  }
});
