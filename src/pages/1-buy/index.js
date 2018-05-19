import { StackNavigator } from "react-navigation"
import Home from "./0-home"
import Detail from "./1-detail"
import ModalScreen from "./2-modal"

const MainStack = StackNavigator({
  Buy: {
    screen: Home
  },
  BuyDetail: {
    screen: Detail
  }
}, {
  initialRouteName: "Buy"
})

export default StackNavigator({
  Main: {
    screen: MainStack,
  },
  MyModal: {
    screen: ModalScreen,
  }
}, {
  mode: "modal",
  headerMode: 'none'
})
