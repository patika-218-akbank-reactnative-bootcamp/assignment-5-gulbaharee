import React from "react";
import { View, StyleSheet, Text ,Pressable} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button placeholder="Sign In" />
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
