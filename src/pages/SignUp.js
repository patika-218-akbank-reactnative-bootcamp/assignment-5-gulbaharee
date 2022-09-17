import React from "react";
import { View, StyleSheet, Dimensions, Pressable, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import auth from "../../firebase";

const screen_Width = Dimensions.get("screen").width;

const SignUp = () => {
  const { navigate } = useNavigation();

  const handleSubmit = (e) => {
    if (password === passwordCheck) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Email" onChangeText={(text) => (email = text)} />
      <Input
        placeholder="Password"
        onChangeText={(text) => (password = text)}
      />
      <Input
        placeholder="Password (again)"
        onChangeText={(text) => (passwordCheck = text)}
      />
      <Button placeholder="Sign Up" />
      <Pressable onPress={() => navigate("Sign In")}>
        <Text style={styles.text}>Do not have an account?</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
  text: {
    textAlign: "center",
    marginTop: -25,
  },
});
