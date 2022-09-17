import React from "react";
import { TextInput, StyleSheet, View, Dimensions } from "react-native";

const screen_Width = Dimensions.get("screen").width;

const Input = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.inputStyle}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    width: (screen_Width * 3) / 4,
    marginVertical: 10,
    marginLeft: screen_Width / 8,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    borderColor: "grey",
  },
});
