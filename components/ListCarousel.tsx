import React, { Component } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import FilmListModel from "../models/FilmListModel";

import CategoryView from "./CategoryView"

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    height: 'auto'
  },
});


export default function ListCarousel({data}:{data:FilmListModel}) {

    return (
        <SafeAreaView style={styles.container}>
          <CategoryView data={data.comics} name={"Comics"}/>
          <CategoryView data={data.events} name={"Events"}/>
          <CategoryView data={data.series} name={"Series"}/>
          <CategoryView data={data.stories} name={"Stories"}/>
        </SafeAreaView>
    );

}