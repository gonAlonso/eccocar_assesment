import React, { Component } from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';
import LoadResource from "../LoadResource";

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    height: 200,
    backgroundColor: "red",
    margin: 5
  },
  imageText: {
    textAlign: "left",
    marginTop: 5,
  },
  logo: {
    width: 150,
    height: 150,
  }
})


class ItemView extends Component {

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
          data: res[0],
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

  render() {
    return (this.state.loading)
    ? (<Text>Loading</Text>)
    : (
      <View style={styles.itemView}>
        <Image
            style={styles.logo}
            //source={{uri:this.state.data.images[0]}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6jX7tSXJh6F15SASztII0PRg17KlKLvYpA&usqp=CAU"}}
            />
            <Text style={styles.imageText}>{this.state.data.title}</Text>
      </View>
    );
  }
}

export default ItemView;