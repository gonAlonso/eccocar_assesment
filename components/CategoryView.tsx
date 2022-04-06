import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ItemView from './ItemView';

import LoadResource from "../LoadResource";

const styles = StyleSheet.create({
  itemView: {
    flex: 2,
    flexDirection: 'column',
    padding: 10,
    height: 200
  },
  imageText: {
    textAlign: "left",
    marginTop: 5,
  },
  flatListContainer: {
    marginTop: 2,
    height: 500,
    paddingVertical: 2
},
})


class CategoryView extends Component {
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

    LoadResource(this.props.uri)
      .then(res => {
        this.setState({
          data: res[0].comics.items,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        console.log("Load Error")
        this.setState({ error, loading: false });
      });
  };

  render (){
    if (this.state.loading)
      return (<Text>Loading</Text>)
    else {
      return (
        <View style={styles.itemView}>
          <Text style={styles.imageText}>{this.props.name}</Text>
          <FlatList 
                horizontal={true} style={styles.flatListContainer}
                data={this.state.data}
                keyExtractor={(item) => item.resourceURI}
                renderItem={({ item }) => (
                    <ItemView uri={item.resourceURI}/>
                  )}
              />
        </View>
      );
    }
  }
}

export default CategoryView;