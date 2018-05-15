/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import { YellowBox, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "@components";
import s from "@style";
import HomeStack from "./0-home";
import BuyStack from "./1-buy";
import MyStack from "./2-my";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack
    },
    Buy: {
      screen: BuyStack
    },
    My: {
      screen: MyStack
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      showLabel: false,
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let navTitle;
        if (routeName === "Home") {
          navTitle = "首页";
        } else if (routeName === "Buy") {
          navTitle = "已购";
        } else if (routeName === "My") {
          navTitle = "我的";
        }
        return (
          <Text
            style={[
              s.text_center,
              s.font10,
              s.h20,
              { color: tintColor, lineHeight: 20 }
            ]}
          >
            {navTitle}
          </Text>
        );
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-o"}`;
        } else if (routeName === "Buy") {
          iconName = `buy${focused ? "" : "-o"}`;
        } else if (routeName === "My") {
          iconName = `me${focused ? "" : "-o"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={20} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      style: { height: 54, borderTopWidth: 0 },
      tabStyle: { height: 40, marginTop: 10 },
      activeTintColor: "#45c2c8",
      inactiveTintColor: "#333"
    }
  }
);

// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View, Image } from "react-native";
// import { Tag, Button, Toast } from "antd-mobile"
// import BuyHome from "./1-buy/0-home"
// import { Title, Icon } from "@components";
// import s from "@style";

// export default class App extends Component {
//   onClick = () => {
//     Toast.info("lalaa")
//   }
//   render() {
//     return (
//       <View style={[s.equal]}>
//         <Title title="minooo" />
//         <Icon name="left" size={40} color="#4F8EF7" />
//         <Text style={[s.c_main, s.border_top]}>Hello, minooo!</Text>
//         <View style={[s.w120, s.h40, s.bg_main, s.r10]} />
//         <Image source={require("@images/active_full.png")} />
//         <Button type="primary" onClick={this.onClick}>你好123</Button>
//         <Tag data-seed="logId">Basic</Tag>
//         <Text
//           style={[
//             s.font10,
//             s.mt10,
//             s.bg_second,
//             s.w120,
//             s.text_center,
//             { lineHeight: 40 }
//           ]}
//           numberOfLines={1}
//         >
//           min
//         </Text>
//       </View>
//     );
//   }
// }
