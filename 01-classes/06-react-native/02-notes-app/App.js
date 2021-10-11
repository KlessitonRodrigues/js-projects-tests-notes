import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Body from "./src/body";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      <Body />
    </View>
  );
}