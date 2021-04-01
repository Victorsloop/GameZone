import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './Navigation/drawerNavigation'


const Stack = createStackNavigator()

export default function App() {
  return (
    <DrawerNavigator/>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home"
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: 'blue',
    //     },
    //     headerTintColor: '#fff',
    //     // headerTitleAlign: 'center',
    //   }}>
    //     <Stack.Screen name="Home" component={Home} options={{ title: 'Gamezone' }} />
    //     <Stack.Screen name="Reviewdetails" component={Reviewdetails} options={{ title: 'Review Details' }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

