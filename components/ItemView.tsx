import React, { Component } from 'react';
import { Text, View, Image,StyleSheet, TouchableOpacity, Button } from 'react-native';
import LoadResource from "../LoadResource";

const styles = StyleSheet.create({
  itemView: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#fafafa',
    margin: 5,
    //minHeight: 100,
    //alignSelf: 'flex-start'
  },
  imageText: {
    textAlign: 'left',
    marginTop: 5,
    maxWidth: 150
  },
  logo: {
    width: 150,
    height: 150,
  },
  touchable: {
    flex: 1,
  }
})


function ItemView({uri, name}:{uri:string, name:string} ){
  return (false)
  ? (<Text>Loading</Text>)
  : (
    <TouchableOpacity onPress={(evt)=>{
        console.log(`Selected ${uri}`)
        //navigation.replace('ItemDetail')
      }} style={styles.touchable}>
      <View style={styles.itemView}>
        <Image
            style={styles.logo}
            //source={{uri:this.state.data.images[0]}}
            source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6jX7tSXJh6F15SASztII0PRg17KlKLvYpA&usqp=CAU"}}
            />
            <Text style={styles.imageText}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemView