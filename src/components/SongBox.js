import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

const SongBox = ({ song }) => {
  return (
    <Pressable >
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <Text style={styles.text}>{song}</Text>
          <Entypo name="heart-outlined" size={24} color="black" />
        </View>
      </View>
    </Pressable>
  );
};

export default SongBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7d8597",
    height: 70,
    width: 325,
    margin: 5,
    borderRadius: 10,
    
  },
  innercontainer: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
});
