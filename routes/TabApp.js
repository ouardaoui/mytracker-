import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AccountScreen from '../src/screens/AccountScreen'
import TrackCreateScreen from '../src/screens/TrackCreateScreen'
import TrackDetailScreen from '../src/screens/TrackDetailScreen'
import TrackListScreen from '../src/screens/TrackListScreen'
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const TabApp = () => {


  return (
    <Tab.Navigator initialRouteName="Account Track"

      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: () => {

          switch (route.name) {
            case "List & Detail":
              return <FontAwesome name="list" size={24} color="black" />
            case "Create Track":
              return <FontAwesome name="plus" size={24} color="black" />
            case "Account Track":
              return <FontAwesome name="gear" size={24} color="black" />
          }

        },

      })}
    >
      <Tab.Screen name="List & Detail" component={TrackListDetail} options={{ headerShown: false }} />
      <Tab.Screen name="Create Track" component={TrackCreateScreen} />
      <Tab.Screen name="Account Track" component={AccountScreen} />
    </Tab.Navigator>
  )
}
const Stack = createNativeStackNavigator();
export const TrackListDetail = () => {
  return (
    <Stack.Navigator initialRouteName="List Track">
      <Stack.Screen name="Track List" component={TrackListScreen} />
      <Stack.Screen name="Track Detail" component={TrackDetailScreen} />
    </Stack.Navigator>
  )
}



export default TabApp

