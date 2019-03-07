import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo title="Fazer café" />
        <Todo title={"Bora dev!!!"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AAA"
  }
});
