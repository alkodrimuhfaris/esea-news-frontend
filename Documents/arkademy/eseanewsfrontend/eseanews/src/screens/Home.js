/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import CardNews from '../components/CardNews';
import CardCategory from '../components/CardCategory';
import {useNavigation} from '@react-navigation/native';
import service from '../helpers/services';
import {useSelector} from 'react-redux';
import axios from 'axios';
import qs from 'qs';

export default function Home() {
  const [data, setData] = useState({});
  const navigation = useNavigation();

  const getData = async () => {
    const {data} = await service().get('public/article/all');
    setData(data);
    return data;
  };

  useEffect(() => {
    getData();
    console.log(data);
    console.log(data.results);
  }, []);

  const nextPage = async () => {
    const {nextLink} = data.pageInfo;

    if (nextLink) {
      const res = await axios.get(nextLink);
      const {results} = res.data;
      const newData = {
        ...data,
        results: [...data.results, ...results],
        pageInfo: res.pageInfo,
      };
      setData(newData);
    }
  };

  const goToArticle = ({item}) => {
    navigation.navigate('Article', {id: item.id});
    console.log(item.id);
  };

  const goToCategory = (key) => {
    navigation.navigate('ArticleInCategory');
  };
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView vertical style={styles.container}>
        <Header />
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Categories</Text>
        </View>
        <ScrollView horizontal style={styles.categorySlide}>
          {[...Array(5)].map((_item, index) => (
            <TouchableOpacity
              onPress={(key) => goToCategory(key)}
              key={index}
              style={
                index === 0 ? styles.extraLeftMargin : styles.casualMargin
              }>
              <CardCategory />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Fresh news for you</Text>
        </View>

        <View style={styles.articlesWrapper}>
          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.flatListRender}
            data={Object.keys(data).length > 0 && data.results}
            onEndReached={nextPage}
            onEndReachedTreshold={0.5}
            renderItem={(item) => {
              return (
                <TouchableOpacity
                  onPress={() => goToArticle(item)}
                  style={styles.list}>
                  <CardNews data={item} />
                </TouchableOpacity>
              );
            }}
          />
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
  articlesWrapper: {
    flex: 1,
    width: '100%',
  },
  flatListRender: {
    marginVertical: 10,
  },
  list: {
    alignItems: 'center',
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
