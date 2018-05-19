import React from "react";
import { View, Text, Button } from "react-native";
import { Icon } from "@components";
import s from "@style";

export default class extends React.Component {
  static navigationOptions = ({
    navigation,
    navigationOptions,
    screenProps
  }) => {
    const { params={} } = navigation.state;
    return {
      // title: JSON.stringify(screenProps)
      title: params && params.title ? params.title : "默认标题",
      headerTitle: (
        <View style={[s.equal, s.row, s.jc_center]}>
          <Text>{params && params.title ? params.title : "默认标题"}</Text>
        </View>
      ),
      headerRight: (
        <View style={[s.w100, s.mr10]}>
          {params.increaseCount && <Button title="+1 click" onPress={params.increaseCount} />}
        </View>
      ),
      // headerLeft: (
      //   <View style={[s.w100, s.mr10]}>
      //     {params.increaseCount && <Button title="+1 click" onPress={params.increaseCount} />}
      //   </View>
      // )
    };
  };
  UNSAFE_componentWillMount() {
    const { navigation } = this.props
    navigation.setParams({ increaseCount: this._increaseCount })
  }
  state = {
    count: 0
  }
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    const { count } = this.state
    const { navigation } = this.props;
    const paramId = navigation.getParam("id", "no-id");
    const all = navigation.state;
    return (
      <View style={[s.equal, s.jc_center, s.ai_center]}>
        <Text>点击加1：{count}</Text>
        <Icon.Button
          onPress={() => navigation.setParams({ title: "床前明月光" })}
        >
          更改标题
        </Icon.Button>
        <Text>{JSON.stringify(paramId)}</Text>
        <Text>{JSON.stringify(all)}</Text>
        <Icon.Button onPress={() => navigation.push("HomeDetail")}>
          再次去详情 push
        </Icon.Button>
        <Icon.Button onPress={() => navigation.navigate("Home")}>
          返回首页 navigate
        </Icon.Button>
        <Icon.Button onPress={() => navigation.popToTop()}>
          返回首页 popToTop
        </Icon.Button>
        <Icon.Button onPress={() => navigation.push("Home")}>
          返回首页 push
        </Icon.Button>
        <Icon.Button onPress={() => navigation.push("BuyDetail")}>
          回到已购想抢 navigate
        </Icon.Button>
        <Icon.Button onPress={() => navigation.goBack()}>
          返回上一层 back
        </Icon.Button>
        <Text>首页详情</Text>
      </View>
    );
  }
}
