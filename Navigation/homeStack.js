import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Reviewdetails from '../Screens/Reviewdetails';
import Header from '../Shared/Header';

const homeStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9FA8DA',
        },
        headerTitleStyle: {
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header navigation={navigation} title="Getting to know Becka" />,
        }}

      />
      <Stack.Screen name="ReviewDetails" component={Reviewdetails} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};

export default homeStack;