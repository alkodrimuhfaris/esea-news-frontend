/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function CardNews() {
  return (
    <View style={cardStyle.parent}>
      <Text ellipsizeMode="tail" numberOfLines={2} style={cardStyle.title}>
        Resep Ikan Mas Cobek Pedas, Lezat Menggugah Selera
      </Text>
      <Image
        source={{
          uri: 'http://52.200.32.180:8800/Uploads/4-picture-1604821675842.jpg',
        }}
        style={cardStyle.image}
      />
      <View style={cardStyle.bellowImgWrap}>
        <Text ellipsizeMode="tail" numberOfLines={2} style={cardStyle.caption}>
          Masak hidangan ikan bisa menjadi pilihan menu sehat yang juga lezat.
          Anda bisa mencoba mencoba berkreasi dengan ikan mas. Anda bisa membuat
          hidangan ikan mas dengan bumbu rempah-rempah. Hmm...membayangkannya
          saja sudah terasa sedap. Sudah tidak sabar ingin masak ikan mas cobek
          pedas?
        </Text>
      </View>
    </View>
  );
}

const cardStyle = StyleSheet.create({
  parent: {
    width: '90%',
    height: 'auto',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
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
