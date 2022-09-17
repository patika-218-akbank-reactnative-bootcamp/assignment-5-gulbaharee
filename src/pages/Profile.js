import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import SongBox from "../components/SongBox";
import {useSelector} from 'react-redux';

const Profile = () => {
  const loggedUser = useSelector((state)=> state.loggedUser.loggedUserInfo);
  return (
    <View style={styles.container}>
      <ProfileHeader userName={loggedUser.username} />
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
