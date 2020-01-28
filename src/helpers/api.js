class Api {
  static quizme = async () => {
    let response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    return response.json()
  } 
}

export default Api
