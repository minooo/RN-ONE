import { StackNavigator } from "react-navigation"
import Home from "./0-home"
import Detail from "./1-detail"

export default StackNavigator({
  Home: {
    screen: Home
  },
  HomeDetail: {
    screen: Detail
  }
}, {
  initialRouteName: "Home"
})
