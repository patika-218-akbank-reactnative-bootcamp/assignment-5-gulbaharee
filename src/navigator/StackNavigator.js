import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Router from '../pages/Router';

const Stack = createNativeStackNavigator();

const StackNavigator =()=>{

    return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Sign In' options={{headerShown:false}} component={SignIn}/>
                    <Stack.Screen name='Sign Up' options={{headerShown:false}} component={SignUp}/>
                    <Stack.Screen name='Router' options={{headerShown:false}} component={Router}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
};


export default StackNavigator;