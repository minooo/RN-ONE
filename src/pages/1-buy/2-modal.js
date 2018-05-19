import React from "react";
import { View, Text, Button } from "react-native";

export default class extends React.Component {
  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal from {params && params.name}</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
