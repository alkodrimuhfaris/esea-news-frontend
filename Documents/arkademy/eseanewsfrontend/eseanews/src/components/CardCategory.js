import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function CardCategories() {
  return (
    <View style={categoryStyle.parent}>
      <Image
        source={{
          uri:
            'http://52.200.32.180:8800/Uploads/1-categoryPicture-1604820599024.jpg',
        }}
        style={categoryStyle.image}
      />
      <Text ellipsizeMode="tail" numberOfLines={2} style={categoryStyle.title}>
        Environmental ala ala bolo bolo
      </Text>
    </View>
  );
}

const categoryStyle = StyleSheet.create({
  parent: {
    width: 120,
    height: 'auto',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    zIndex: 1,
  },
  title: {
    width: '70%',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    color: '#102526',
    fontWeight: 'bold',
  },
});
