import React from "react";
import { View, Text } from "react-native";
import { Icon } from "@components";
import s from "@style";

export default class extends React.Component {
  static navigationOptions = {
    title: "嘟嘟新媒体",
    header: null
  };
  render() {
    const { navigation } = this.props
    return (
      <View style={[s.equal]}>
        <View style={[s.ml16, s.mr16, s.mt10, s.h35]}>
          <Icon.Button
            name="search"
            size={14}
            color="#999"
            backgroundColor="#f0f0f0"
            borderRadius={100}
            onPress={() => navigation.navigate("HomeDetail")}
          >
            <Text style={[s.font14]}>搜个关键词试试看</Text>
          </Icon.Button>
        </View>
      </View>
    );
  }
}
