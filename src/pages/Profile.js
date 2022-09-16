import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import SongBox from "../components/SongBox";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader userName={"Gülbahar Erol"} />
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Liked Songs</Text>
        <SongBox song={"song"} />
        <SongBox song={"song"} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  innerContainer: {
    margin: 20,
  },
  header: {
    fontSize: 40,
    marginLeft:10,
  },
});
