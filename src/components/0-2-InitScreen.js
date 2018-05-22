import React from "react"
import { StyleSheet, View, Imgage } from "react-native"
import s from "@style"
import { screen } from "@utils"

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    width: screen.width,
    height: screen.height,
    resizeMode: "cover"
  }
})

export default class () => (
  <View style={[s.equal]}>
    <Image
      source={require("@images/init_screen_bg.png")}
      style={styles.image}
    />
  </View>
)
