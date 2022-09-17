import React from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import CategoryBox from "../components/CategoryBox";

const Search = () => {
  return (
    <View>
      <SearchBar />
      <View style={styles.containerList}>
        <CategoryBox type='type1'/>
        <CategoryBox type='type1'/>
        <CategoryBox type='type1'/>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
   
    containerList: {
      display: "flex",
      flexDirection:'row',
      flex:2,
      marginLeft:25,
      marginTop:20,
      justifyContent:'space-between',
    },
  });
  
