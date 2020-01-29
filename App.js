import React, {Component} from "react";
import Views from "./src/helpers/views.js"
import { store } from "./src/redux";
import { Provider } from "react-redux";
import { NavigationNativeContainer } from '@react-navigation/native';


export default class App extends Component {
  render = () => (
      <Provider store={store}>
        <Views.Container/>
      </Provider>
  )
}
