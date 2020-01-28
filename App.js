import React from "react";
import Views from "./src/helpers/views.js"
import { store } from "./src/redux";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render = () => (
      <Provider store={store}>
        <Views.Container/>
      </Provider>
  )
}
