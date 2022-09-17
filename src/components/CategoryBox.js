import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import {useSelector } from "react-redux";

const CategoryBox = ({ type }) => {
  const theme = useSelector(state => state.theme.activeTheme);
  return (
    <Pressable >
      <View style={styles.container}>
          <Text style={styles.text}>{type}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7d8597",
    height: 140,
    width: 140,
    margin: 5,
    borderRadius: 10,
    
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
});
