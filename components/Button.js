import React from "react";
import { StyleSheet, Text, View, TextInput,Button } from "react-native";

export default function Button(props) {
  const { title, onPress } = props;
  return (
    <Button
    title={title}
    onPress={() => {onPress}}
    />
  );
}
