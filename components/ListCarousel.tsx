import React, { Component } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import md5 from "md5";

import CategoryView from "./CategoryView"
import LoadResource from "../Config";

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  containerNew: {
      justifyContent: "flex-start",
      flexDirection: "column"
  },
      flatListContainer: {
      marginTop: 2,
      height: 500,
      paddingVertical: 2
  },
      flatListDataContainer: {
      alignSelf: 'center',
  },
      flatListContentContainerStyle: {
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
  },
      flatListColumnWraper:{
      flexDirection: 'column',
  },
});


class ListCarousel extends Component {
  constructor(props:any) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
      this.setState({ loading: true });
      LoadResource(`${global.config.baseUrl}${global.config.topic}`)
      .then(res => {
        console.log("Loading..")
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
        console.log("Loaded")
      })
      .catch(error => {
        console.log("Load Error")
        this.setState({ error, loading: false });
      });
  };

  render(){
    return (
        <SafeAreaView style={styles.containerNew}>
          <FlatList 
            horizontal={false} style={styles.flatListContainer}
            data={this.state.data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <CategoryView
                  uri={item.resourceURI} name={item.title}/>
              )}
          />
        </SafeAreaView>
    );
  }

}

export default ListCarousel;