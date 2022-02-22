import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './components/Home';
import Details from './components/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}} //Remove default header
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}} //Remove default header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
