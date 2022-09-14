import React from "react";
import { View, Text,Pressable,StyleSheet,Dimensions } from "react-native";

const screen_Width = Dimensions.get("screen").width;

const Button = ({ onPress, placeholder }) => {
    return(
        <Pressable onPress={onPress}>
            <View style={styles.buttonStyle}><Text style={styles.text}>{placeholder}</Text></View>
        </Pressable>
    )
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
      width: (screen_Width * 3) / 4,
      marginVertical: 40,
      marginLeft: screen_Width / 8,
      height: 50,
      borderRadius: 30,
      alignItems: "center",
      backgroundColor:'rgb(30,215,96)'
    },
    text:{
        fontSize:20,
    }
  });
