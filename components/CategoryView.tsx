import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import FilmCategoryModel from '../models/FilmCategoryModel';
import FilmListModel from '../models/FilmListModel';
import ItemView from './ItemView';

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    flexBasis: '100%',
  },
  imageText: {
    textAlign: "left",
    marginTop: 5,
  },
  flatListContainer: {
    marginTop: 2,
    paddingVertical: 2
},
})


export default function CategoryView({data, name}:{data:FilmCategoryModel, name:string}) {
  return (
    <View style={styles.itemView}>
      <Text style={styles.imageText}>{name}</Text>
      <FlatList 
            horizontal={true} style={styles.flatListContainer}
            data={data.items}
            keyExtractor={(item) => item.resourceURI}
            renderItem={({ item }) => (
                <ItemView uri={item.resourceURI} name={item.name}/>
              )}
          />
    </View>
  );
}
