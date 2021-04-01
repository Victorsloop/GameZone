import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../Screens/About';
import Header from '../Shared/Header';

const aboutStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'purple',
        },
        headerTitleAlign: 'center',
      }}
    >
     <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header navigation={navigation} title="About" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default aboutStack;