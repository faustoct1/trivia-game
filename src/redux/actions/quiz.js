export const load = () => {
  return (dispatch,getState) => {
    dispatch({type:'START'})
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then((response)=>response.json())
    .then((json) => {
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
