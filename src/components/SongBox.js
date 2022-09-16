import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const SongBox = ({ song }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>{song}</Text>
      </Pressable>
    </View>
  );
};

export default SongBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7d8597",
    height: 80,
    width: 325,
    margin: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
});
