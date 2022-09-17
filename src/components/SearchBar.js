import React from "react";
import { View, StyleSheet, Dimensions, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("screen").width;
const SearchBar = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.searchbar}/>
      <AntDesign name="search1" size={30} color="black" style={styles.icon} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
      display:'flex',
      flexDirection:'row',
      height: 120,
      width: screenWidth,
      justifyContent: "space-between",
      backgroundColor:'#dee2e6',
    },
    searchbar:{
        marginTop:60,
        marginLeft:20,
        borderWidth:0.5,
        width:screenWidth-80,
        borderRadius:10,
        height:40,
    },
    icon:{
        marginTop:65,
        marginRight:20,
    }
  });
  