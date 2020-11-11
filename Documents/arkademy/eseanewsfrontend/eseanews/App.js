/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from './src/components/Header';

function SearchNews() {
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

export default function SearchResult() {
  const [category, setCategory] = useState('Environment');

  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView vertical style={styles.container}>
        <Header
          title={category}
          category={category}
          img={
            'http://52.200.32.180:8800/Uploads/1-categoryPicture-1604820599024.jpg'
          }
        />
        <View style={styles.articlesInCategory}>
          {[...Array(5)].map((_item, index) => (
            <TouchableOpacity
              key={index}
              style={index === 0 ? styles.noTopMargin : styles.topMargin}>
              <SearchNews />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEFFFF',
    zIndex: 1,
  },
  articlesInCategory: {
    marginTop: 50,
    marginBottom: 50,
  },
  noTopMargin: {
    alignItems: 'center',
    marginBottom: 10,
  },
  topMargin: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  noLeftMargin: {
    alignItems: 'center',
    marginRight: 5,
  },
  leftMargin: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  headingWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    width: '70%',
    fontSize: 18,
    color: '#102526',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  saveBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  wrapper: {
    backgroundColor: '#FEFFFF',
    width: '80%',
  },
  container: {
    width: '100%',
    position: 'relative',
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
