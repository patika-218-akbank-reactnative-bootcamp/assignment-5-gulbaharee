import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("screen").width;
const ProfileHeader = ({ userName }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.image}></View>
        <Text style={styles.header}>{userName}</Text>
      </View>
      <Ionicons
        name="settings-outline"
        size={24}
        color="black"
        style={styles.icon}
        onPress={()=>navigate('Settings')}
      />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 120,
    width: screenWidth,
    justifyContent: "space-between",
  },
  header: {
    fontSize: 30,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "grey",
  },
  innerContainer: {
    marginLeft: 20,
    marginTop: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginTop: 70,
    marginRight: 20,
  },
});
