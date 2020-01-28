import React from "react";
import Views from "./src/helpers/views"
//import Home from "./src/screens/home";
//import { store } from "./src/redux";
//import { Provider } from "react-redux";

export default class App extends React.Component {
  render = () => {
    /*
      <Provider store={store}>
        <Home />
      </Provider>
    */
    return (
      <Views.Container/>
    )
  }
}
