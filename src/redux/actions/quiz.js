const he = require('he')
export const load = () => {
  return (dispatch,getState) => {
    dispatch({type:'START'})
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then((response)=>response.json())
    .then((json) => {
      for(let i=0;i<json.results;i++){
        json.results[i].question = he.decode(json.results[i].question)
      }
      dispatch({type:'SUCCESS',payload:json.results})
    })
    .catch((error)=>dispatch({type:'FAILURE',payload:error}))
  }
}

export const next = (payload) => {
  return { type: 'ANSWER', payload: payload }
}

export const score = (payload) => {
  return { type: 'SCORE', payload: payload }
}
