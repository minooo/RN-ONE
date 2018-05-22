import React from "react"
import { Provider } from "react-redux"
import { InitScreen } from "@components"
import store from "../store"
import App from "./App"

export default class extends React.Component {
  state={}
  componentDidMount() {
    setTimeout(() => { this.setState({ hide: true }) }, 2000)
  }
  render() {
    const { hide } = this.state
    if (!hide) return <InitScreen />
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

