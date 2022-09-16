import React from "react";
import { View, StyleSheet, Dimensions, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const Settings = () => {
  const { navigate } = useNavigation();
  const theme = useSelector((state) => state.theme.activeTheme);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.image} />
      <View style={styles.buttons}>
        <Pressable>
          <Text
            style={[styles.button, { backgroundColor: theme.buttonColor }]}
            onPress={() => navigate("Theme")}
          >
            Theme
          </Text>
          <Text
            style={[styles.button, { backgroundColor: theme.buttonColor }]}
            onPress={() => navigate("UserEdit")}
          >
            Setting
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: "red",
    marginLeft: screenWidth / 2 - 60,
    marginTop: 60,
  },
  container: {
    height: screenHeight,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    marginLeft: (screenWidth - 300) / 2,
    marginTop: 60,
  },
  button: {
    height: 70,
    backgroundColor: "rgb(224,224,224)",
    marginTop: 20,
    width: 300,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});
