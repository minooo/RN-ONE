import { StackNavigator } from "react-navigation"
import Home from "./0-home"
import Detail from "./1-detail"

export default StackNavigator({
  Buy: {
    screen: Home
  },
  BuyDetail: {
    screen: Detail
  }
}, {
  initialRouteName: "Buy"
})
