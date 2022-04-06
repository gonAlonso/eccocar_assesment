import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EditScreenInfo from '../components/EditScreenInfo';
import ListCarousel from '../components/ListCarousel';
import FilmListModel from '../models/FilmListModel';

const customData = require('../Data_marvel.json');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default function HomeScreen() {

  return (
    <SafeAreaProvider style={styles.container}>
      <ListCarousel data={customData.data.results[0]}/> 
    </SafeAreaProvider>
  );
}