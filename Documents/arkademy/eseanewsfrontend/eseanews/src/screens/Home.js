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
import Header from '../components/Header';
import CardNews from '../components/CardNews';
import CardCategory from '../components/CardCategory';

export default function Home() {
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView vertical style={styles.container}>
        <Header />
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Fresh news for you</Text>
        </View>
        {[...Array(5)].map((_item, index) => (
          <TouchableOpacity
            key={index}
            style={index === 0 ? styles.noTopMargin : styles.topMargin}>
            <CardNews />
          </TouchableOpacity>
        ))}
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Categories</Text>
        </View>
        <ScrollView horizontal style={styles.categorySlide}>
          {[...Array(5)].map((_item, index) => (
            <TouchableOpacity
              key={index}
              style={
                index === 0 ? styles.extraLeftMargin : styles.casualMargin
              }>
              <CardCategory />
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  noTopMargin: {
    alignItems: 'center',
    marginBottom: 10,
  },
  topMargin: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  extraLeftMargin: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  casualMargin: {
    alignItems: 'center',
    marginRight: 5,
  },
  headingWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    width: '70%',
    fontSize: 18,
    color: '#102526',
    fontWeight: 'bold',
    textAlign: 'center',
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
