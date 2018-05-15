import React from 'react'
import { View, Text } from 'react-native'
import s from "@style"

export default class extends React.Component {
  render() {
    return (
      <View style={[s.equal, s.jc_center, s.ai_center]}>
        <Text>我的</Text>
      </View>
    )
  }
}
