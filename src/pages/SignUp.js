import React from "react";
import {View ,StyleSheet,Dimensions,Pressable,Text} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";

const screen_Width = Dimensions.get("screen").width;

const SignUp = ()=>{

    const { navigate } = useNavigation();

    return(
        <View style={styles.container}>
            <Input placeholder='Username'/>
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            <Input placeholder='Password (again)'/>
            <Button placeholder='Sign Up' />
            <Pressable onPress={()=>navigate('Sign In')}>
        <Text style={styles.text}>Do not have an account?</Text>
      </Pressable>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
      marginTop: 200,
    },
    text:{
        textAlign:'center',
        marginTop:-25,
      }
  });