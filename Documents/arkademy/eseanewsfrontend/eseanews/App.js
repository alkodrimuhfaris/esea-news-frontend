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
import {Input, Card, Form, Item, Button, Label, Textarea} from 'native-base';
import logo from './src/assets/icons/esea.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell, faCircle} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <View style={headerStyles.headerParent}>
      <Text style={headerStyles.headerTitle}>eSea Home</Text>
      <TouchableOpacity style={headerStyles.notifContainer}>
        <View style={headerStyles.notifWrapper}>
          <View style={headerStyles.bellContainer}>
            <FontAwesomeIcon icon={faBell} color={'white'} size={28} regular />
          </View>
          <FontAwesomeIcon
            icon={faCircle}
            color={'#7C4935'}
            size={10}
            style={headerStyles.notifDot}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerParent: {
    position: 'relative',
    backgroundColor: '#22221D',
    width: '100%',
    height: 196,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '20%',
    height: '20$',
    aspectRatio: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  notifContainer: {
    position: 'absolute',
    top: 50,
    right: 15,
  },
  notifWrapper: {
    position: 'relative',
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  bellContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
});

function News() {
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

function Categories() {
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
        Environment
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
    width: 50,
    height: 50,
    borderRadius: 50,
    zIndex: 1,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    color: '#102526',
    fontWeight: 'bold',
  },
});

export default function Home() {
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView vertical style={styles.container}>
        <Header />
        <Text style={styles.heading}>Fresh news for you</Text>
        {[...Array(5)].map((_item, index) => (
          <TouchableOpacity
            key={index}
            style={index === 0 ? styles.noTopMargin : styles.topMargin}>
            <News />
          </TouchableOpacity>
        ))}
        <Text style={styles.heading}>Categories</Text>
        <ScrollView horizontal style={styles.categorySlide}>
          {[...Array(5)].map((_item, index) => (
            <TouchableOpacity
              key={index}
              style={index === 0 ? styles.noLeftMargin : styles.leftMargin}>
              <Categories />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEFFFF',
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
  heading: {
    fontSize: 20,
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
  categorySlide: {
    marginBottom: 30,
  },
});
