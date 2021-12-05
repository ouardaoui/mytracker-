import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AccountScreen from '../src/screens/AccountScreen';
import SigninScreen from '../src/screens/SigninScreen';
import SignupScreen from '../src/screens/SignupScreen';




const StackApp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signin" component={SigninScreen}></Stack.Screen>
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}></Stack.Screen>
    </Stack.Navigator>

  )
}

export default StackApp


