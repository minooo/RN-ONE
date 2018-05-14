/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { Tag, Button, Toast } from "antd-mobile"
import { Title, Icon } from "@components";
import s from "@style";

export default class App extends Component {
  onClick = () => {
    Toast.info("lalaa")
  }
  render() {
    return (
      <View style={[s.equal]}>
        <Title title="minooo" />
        <Icon name="left" size={40} color="#4F8EF7" />
        <Text style={[s.c_main, s.border_top]}>Hello, minooo!</Text>
        <View style={[s.w120, s.h40, s.bg_main, s.r10]} />
        <Image source={require("@images/active_full.png")} />
        <Button type="primary" onClick={this.onClick}>你好123</Button>
        <Tag data-seed="logId">Basic</Tag>
        <Text
          style={[
            s.font10,
            s.mt10,
            s.bg_second,
            s.w120,
            s.text_center,
            { lineHeight: 40 }
          ]}
          numberOfLines={1}
        >
          min
        </Text>
      </View>
    );
  }
}
