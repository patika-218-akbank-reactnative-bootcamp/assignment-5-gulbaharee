import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const Playlist = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>{placeholder}</Text>
      </Pressable>
    </View>
  );
};

export default Playlist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7d8597",
    height: 50,
    width: 160,
    margin: 5,
    borderRadius: 10,
  },
  text:{
    fontSize:25,
    textAlign:'center',
  }
});
