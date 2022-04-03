import React, { Component } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import ItemView from "./ItemView";
import CategoryView from "./CategoryView";

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
      loading: false,
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
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
          console.log("ZALO-1")
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  render(){
    return (
        <SafeAreaView style={styles.containerNew}>
          <FlatList 
            horizontal={true} style={styles.flatListContainer}
            data={this.state.data}
            keyExtractor={(item) => item.email}
            renderItem={({ item }) => (
                <ItemView
                  image={item.picture.medium} text={item.name.first}/>
              )}
          />
        </SafeAreaView>
    );
  }

}

/*
const ItemView = ({image, text}:{image:string, text:string}) => {
  return (
    <View style={styles.itemView}>
      <Image
          style={styles.logo}
          source={{uri:image}}
          />
          <Text style={styles.imageText}>{text}</Text>
    </View>
  );
}*/


export default ListCarousel;