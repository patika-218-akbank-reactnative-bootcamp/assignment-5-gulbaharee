import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Router from "../pages/Router";
import Theme from "../pages/Theme";
import EditPage from "../pages/EditPage";
import Settings from "../pages/Settings";
import {Button} from 'react-native';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const theme = useSelector(state => state.theme.activeTheme);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign In"
          options={{ headerShown: false }}
          component={SignIn}
        />
        <Stack.Screen
          name="Sign Up"
          options={{ headerShown: false }}
          component={SignUp}
        />
        <Stack.Screen
          name="Router"
          options={{ headerShown: false }}
          component={Router}
        />
        <Stack.Screen
          name="Settings"
          options={{
            headerRight: () => (
              <Button title="Log Out" />
            ),
          }}
          component={Settings}
        />
        <Stack.Screen
          name="Theme"
          component={Theme}
        />
        <Stack.Screen
          name="Edit Page"
          component={EditPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
