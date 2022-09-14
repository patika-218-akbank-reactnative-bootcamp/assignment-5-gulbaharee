import React from "react";
import { View,StyleSheet,Text } from "react-native";
import Input from '../components/Input';
import Button from "../components/Button";

const SignIn =()=>{
    return(
        <View style={styles.container}>
            <Input placeholder='Username'/>
            <Input placeholder='Password'/>
            <Button placeholder='Sign In'/>
        </View>
    )
}

export default SignIn;

const styles=StyleSheet.create(
    {
        container:{
            marginTop:300,
        },
       
    }
)