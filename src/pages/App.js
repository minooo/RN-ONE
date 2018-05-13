/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Title, Icon } from "@components";
import s from "@style";

export default class App extends Component {
  render() {
    return (
      <View style={[s.equal]}>
        <Title title="minooo" />
        <Icon name="left" size={40} color="#4F8EF7" />
        <Text style={[s.c_main, s.border_top]}>Hello, minooo!</Text>
        <View style={[s.w120, s.h40, s.bg_main, s.r10]} />
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
          121234
        </Text>
      </View>
    );
  }
}
