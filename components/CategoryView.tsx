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
})

export default CategoryView = ({name, items}:{name:string, items:object[]}) => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.imageText}>{name}</Text>
      <FlatList 
            horizontal={true} style={styles.flatListContainer}
            data={this.state.data}
            keyExtractor={(item) => item.email}
            renderItem={({ item }) => (
                <ItemView
                  image={item.picture.medium} text={item.name.first}/>
              )}
          />
    </View>
  );
}