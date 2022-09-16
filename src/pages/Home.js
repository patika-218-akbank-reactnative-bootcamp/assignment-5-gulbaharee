import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Playlist from "../components/Playlist";
import { useDispatch, useSelector } from "react-redux";
import SongBox from "../components/SongBox";

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Playlists</Text>
      <View style={styles.containerCategories}>
        <View style={styles.header}>
          <Playlist placeholder={"test"} />
          <Playlist />
          <Playlist />
        </View>
        <View style={styles.header}>
          <Playlist />
          <Playlist />
          <Playlist />
        </View>
      </View>
      <Text style={styles.title}>New Releases</Text>
      <View style={styles.containerList}>
        <SongBox song={"song"}/>
        <SongBox song={"song"}/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    
    marginHorizontal: "auto",
    display: "flex",
  },
  containerCategories:{
    display: "flex",
    flexDirection: "row",
    marginLeft:25,
  },
  containerList: {
    display: "flex",
    flexDirection: "column",
    marginLeft:25,
  },
  title: {
    fontSize: 40,
    margin: 30,
    paddingTop: 30,
  },
});
