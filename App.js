import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native'

import Menu from './src/screens/Menu';
import CurrentWeather from './src/screens/CurrentWeather';
import Forecast from './src/screens/Forecast';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor='#E5E5E5' />
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
        // options={{ title: 'Menu' }}
        />
        <Stack.Screen
          name="CurrentWeather"
          component={CurrentWeather}
        // options={{ title: 'Search' }}
        />
        <Stack.Screen
          name="Forecast"
          component={Forecast}
        // options={{ title: 'Search' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});