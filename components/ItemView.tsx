import React from 'react';
import { Text, View, Image,StyleSheet } from 'react-native';

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
  logo: {
    width: 120,
    height: 150,
  }
})

export default ItemView = ({image, text}:{image:string, text:string}) => {
  return (
    <View style={styles.itemView}>
      <Image
          style={styles.logo}
          source={{uri:image}}
          />
          <Text style={styles.imageText}>{text} Test</Text>
    </View>
  );
}