import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./src/navigator/StackNavigator";
import { store } from "./src/store/index";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
