initialState = {
  index:0,
  list: [],
  score: 0,
  error: null
}

const quiz = (state = initialState, action) => {
  switch(action.type){
    case 'START':
      return Object.assign({},state, {
        index:0,
        list: [],
        score: 0,
        error: null
      })
    case 'SUCCESS':
      return Object.assign({},state,{ list:action.payload })
    case 'FAILURE':
      return Object.assign({},state,{ error:action.payload })
    case 'ANSWER':
      const {list,index}        = state
      let   {score}             = state
      const isCorrect           = (action.payload==list[index].correct_answer) 
      list[index].answered      = action.payload
      list[index].isCorrect     = isCorrect
      list[index].iconname      = (isCorrect ? 'checkcircle' : 'closecircle')
      list[index].iconcolor     = (isCorrect ? 'green' : 'red')
      return Object.assign({}, state, { 
        list: list, 
        score: (isCorrect && score+1<=10 ? score+1 : score), 
        index: (index+1),
      })
    default:
      return state
  }
}

export default quiz

