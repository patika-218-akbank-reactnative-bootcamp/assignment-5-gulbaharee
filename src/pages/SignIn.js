import React from "react";
import { View, StyleSheet, Text ,Pressable} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import {useDispatch,useSelector} from 'react-redux';
import {setLoginUser} from '../store/loginSlice';
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const { navigate } = useNavigation();
  const dispatch=useDispatch();
  const loggedUser = useSelector((state)=> state.loggedUser.loggedUserInfo);

const handleSubmit=()=>{
  const users={
    email:email,
    username:username,

  }
  dispatch(setLoginUser({loggedUser:users}));
  navigate('Router');
}

  return (
    <View style={styles.container}>
      <Input placeholder="Username" onChangeText={(text) => (username = text)}/>
      <Input placeholder="Email" onChangeText={(text) => (email = text)}/>
      <Input placeholder="Password" onChangeText={(text) => (password = text)}/>
      <Button placeholder="Sign In" onPress={handleSubmit}/>
      <Pressable onPress={()=>navigate('Sign Up')}>
        <Text style={styles.text}>Do not have an account?</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
  },
  text:{
    textAlign:'center',
    marginTop:-25,
  }
});
