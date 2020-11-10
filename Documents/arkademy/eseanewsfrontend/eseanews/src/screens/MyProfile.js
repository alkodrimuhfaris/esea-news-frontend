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
import {faPencilAlt, faChevronRight} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <View style={headerStyles.headerParent}>
      <Text style={headerStyles.name}>M Faris Alkodri</Text>
      <Text style={headerStyles.email}>farisalkodri@gmail.com</Text>
      <TouchableOpacity style={headerStyles.profilePicWrap}>
        <Image
          source={{
            uri:
              'http://52.200.32.180:8080/Uploads/2-product_image-1603966940378.jpg',
          }}
          style={headerStyles.profilePic}
        />
      </TouchableOpacity>
      <TouchableOpacity style={headerStyles.notifContainer}>
        <View style={headerStyles.notifWrapper}>
          <View style={headerStyles.bellContainer}>
            <FontAwesomeIcon
              icon={faPencilAlt}
              color={'white'}
              size={16}
              regular
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerParent: {
    position: 'relative',
    backgroundColor: '#084F6C',
    width: '100%',
    height: 150,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    zIndex: 1,
  },
  profilePicWrap: {
    width: 'auto',
    position: 'absolute',
    bottom: 0,
    right: '50%',
    transform: [{translateY: 50}, {translateX: 50}],
    zIndex: 2,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  email: {
    color: 'white',
    fontSize: 16,
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

const arrayOpt = (articleCount = 0, addressCount = 0) => {
  return [
    {
      title: 'My Articles',
      subtitle: articleCount
        ? `Already write ${articleCount} articles`
        : "Doesn't have any order yet",
    },
    {
      title: 'Setting',
      subtitle: 'Notification, password',
    },
    {
      title: 'Log-out',
      subtitle: '',
    },
  ];
};

function ProfileOpt(props) {
  return (
    <View style={optStyle.parent}>
      <View style={optStyle.titleWrap}>
        <Text style={optStyle.title}>{props.item.title}</Text>
        {props.item.subtitle ? (
          <Text style={optStyle.subtitle}>{props.item.subtitle}</Text>
        ) : null}
      </View>
      <View>
        <FontAwesomeIcon icon={faChevronRight} size={12} color={'#5A6868'} />
      </View>
    </View>
  );
}

const optStyle = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
    height: 70,
  },
  titleWrap: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#102526',
  },
  subtitle: {
    fontSize: 11,
    color: '#5A6868',
  },
});

export default function Home() {
  const items = arrayOpt();
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView vertical style={styles.container}>
        <Header style={styles.header} />
        <View style={styles.header}>
          {items.map((item, index) => (
            <TouchableOpacity key={index}>
              <ProfileOpt item={item} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
  },
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
