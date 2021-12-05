import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResolveAuth from './ResolveAuth';





const Stack = createNativeStackNavigator()
export default function Routes() {

  return (
    <NavigationContainer>

      <ResolveAuth />



    </NavigationContainer>
  )
}
