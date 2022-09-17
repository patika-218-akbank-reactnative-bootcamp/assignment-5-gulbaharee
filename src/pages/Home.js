import React,{useEffect} from "react";
import { View, Text, StyleSheet,Dimensions } from "react-native";
import PlaylistBox from "../components/PlaylistBox";
import { useDispatch, useSelector } from "react-redux";
import SongBox from "../components/SongBox";

const screenHeight = Dimensions.get('screen').height;
const Home = () => {
  const theme = useSelector(state => state.theme.activeTheme);
  const loggedUser = useSelector((state)=> state.loggedUser.loggedUserInfo);


  useEffect(()=>{
    console.log(loggedUser);
  })

  
  return (
    <View style={{backgroundColor:theme.backgroundColor}}>
      <Text style={[styles.title,{textColor:theme.textColor}]}>Playlists</Text>
      <View style={styles.containerCategories}>
        <View style={styles.header}>
          <PlaylistBox placeholder={"test"} />
          <PlaylistBox />
          <PlaylistBox />
        </View>
        <View style={styles.header}>
          <PlaylistBox />
          <PlaylistBox />
          <PlaylistBox />
        </View>
      </View>
      <Text style={[styles.title,{textColor:theme.textColor}]}>New Releases</Text>
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
  continer:{
    height:screenHeight,
  }
});
