import { StackNavigator } from "react-navigation"
import Home from "./0-home"
import Detail from "./1-detail"
import { style } from "@style"

export default StackNavigator({
  Home: {
    screen: Home
  },
  HomeDetail: {
    screen: Detail,
  }
}, {
  initialRouteName: "Home",
  navigationOptions: {
    // 相当于设置 header 的外层view的样式
    headerStyle: Object.assign({}, style.bg_second),
    headerTintColor: "red",
    headerTitleStyle: { fontWeight: "bold" }
  },
  mode: "card", // 页面切换模式 card modal
})
