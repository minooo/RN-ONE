import React from "react";
import { View, SafeAreaView, Text, TouchableHighlight } from "react-native";
import { Icon } from "@components";
import s, { style } from "@style";

// 沉浸式状态
// <StatusBar
//   backgroundColor='rgba(0,0,0, 0.3)'
//   translucent={true}
//   hidden={false}
//   animated={true}
// />

export default class extends React.Component {
  static navigationOptions = {
    title: "hahaah",
    headerTitle: <Text>12345</Text>,
    header: null
  };

  _onPressButton = () => {
    console.log("You tapped the button!");
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={[s.equal, s.bg_main]}>
        <View style={[s.ml16, s.mr16, s.mt10, s.h35]}>
          <Icon.Button
            name="search"
            size={14}
            color="#999"
            backgroundColor="#f0f0f0"
            borderRadius={100}
            onPress={() =>
              navigation.navigate("HomeDetail", {
                id: 86,
                name: "minooo",
                title: "这是来自首页的召唤"
              })
            }
          >
            <Text style={[s.font14]}>搜个关键词试试看</Text>
          </Icon.Button>
        </View>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="red">
          <Text>Button</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
