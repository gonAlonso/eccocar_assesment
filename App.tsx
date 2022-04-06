import React from 'react';
import {StyleSheet, StatusBar } from 'react-native'

import useCachedResources from './hooks/useCachedResources';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import DetailsScreen from './screens/DetailScreen'
import HomeScreen from './screens/Home';
import ItemView from './components/ItemView';


const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <HomeScreen/>
    )

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={ItemView} />
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    overflow: 'scroll',
  }
});
