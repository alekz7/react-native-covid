import React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Notificaciones" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={HomeScreen} />
        <Stack.Screen name="Configuracion" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}