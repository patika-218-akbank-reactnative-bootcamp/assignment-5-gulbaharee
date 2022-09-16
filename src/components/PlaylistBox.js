import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import {useSelector } from "react-redux";

const PlaylistBox = ({ placeholder }) => {
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    <View style={[styles.container,{backgroundColor:theme.buttonColor}]}>
      <Pressable>
        <Text style={styles.text}>{placeholder}</Text>
      </Pressable>
    </View>
  );
};

export default PlaylistBox;

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
