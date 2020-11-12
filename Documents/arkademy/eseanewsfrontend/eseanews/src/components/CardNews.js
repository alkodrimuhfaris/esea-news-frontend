/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function CardNews({data}) {
  const {item} = data;
  return (
    <View style={cardStyle.parent}>
      <Text ellipsizeMode="tail" numberOfLines={2} style={cardStyle.title}>
        {item.title}
      </Text>
      <Image
        source={{
          uri: 'http://52.200.32.180:8800/' + item.picture,
        }}
        style={cardStyle.image}
      />
    </View>
  );
}

const cardStyle = StyleSheet.create({
  parent: {
    width: '90%',
    height: 'auto',
    borderRadius: 10,
    elevation: 3,
    marginVertical: 10,
  },
  relativeParent: {
    position: 'relative',
  },
  signTxt: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
    zIndex: 3,
  },
  image: {
    width: '100%',
    height: 180,
    zIndex: 1,
  },
  bellowImgWrap: {
    padding: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  starWrap: {
    flexDirection: 'row',
  },
  caption: {
    fontSize: 14,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    color: '#102526',
  },
  title: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    color: '#102526',
    fontWeight: 'bold',
  },
});
