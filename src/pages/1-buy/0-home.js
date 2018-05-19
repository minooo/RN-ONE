import React from "react";
import { View, Text, Button, Image } from "react-native";
import s from "@style";

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require("@images/active_full.png")}
        style={[s.h30, s.w30]}
      />
    );
  }
}
export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <View style={[s.w60]}>
          <Button
            onPress={() => navigation.navigate("MyModal", { name: "zhuangzhuang" })}
            title="modal"
            color="red"
          />
        </View>
      )
    };
  };
  render() {
    return (
      <View style={[s.equal, s.jc_center, s.ai_center]}>
        <Text>已购</Text>
      </View>
    );
  }
}
