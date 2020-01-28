initialState = {
  index:0,
  quiz: []
}

const quiz = (state = initialState, action) => {
  if(action.type!=true && action.type!=false){
    return state
  }
  let {quiz,index} = state
  const current = quiz[index]
  current.answser = action.bool
  return {quiz: quiz, index: ++index}
}

export default quiz