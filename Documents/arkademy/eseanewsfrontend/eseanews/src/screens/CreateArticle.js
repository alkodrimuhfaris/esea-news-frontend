/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Form, Button, Label, Textarea} from 'native-base';

export default function ChangeProfile() {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [picture, setPicture] = useState('');
  const [article, setArticle] = useState('');

  useEffect(() => {
    console.log(title);
    console.log(caption);
    console.log(article);
  }, [title, caption, article]);

  return (
    <View style={styles.parent}>
      <View style={styles.groupBtn}>
        <Button style={styles.btnOutline}>
          <Text style={styles.btnTxtOutline}>DISCARD</Text>
        </Button>

        <View style={styles.saveGroup}>
          <Button style={styles.btnSave}>
            <Text style={styles.btnTxtSave}>SAVE TO DRAFT</Text>
          </Button>

          <Button style={styles.btn}>
            <Text style={styles.btnTxt}>PUBLISH</Text>
          </Button>
        </View>
      </View>

      <Form style={styles.formWrapper}>
        <ScrollView style={styles.wrapper}>
          <View style={[styles.form, styles.title]}>
            <Label style={styles.labelTxt}>Title</Label>
            <Textarea
              placeholder="Write your title here"
              onChangeText={(e) => setTitle(e)}
              style={styles.input}
              value={title}
              block
            />
          </View>

          <View style={[styles.form, styles.article]}>
            <Label style={styles.labelTxt}>Article</Label>
            <Textarea
              placeholder="Write your article here"
              onChangeText={(e) => setArticle(e)}
              style={styles.input}
              value={article}
              block
            />
          </View>

          <View style={[styles.form, styles.picture]}>
            <Label style={styles.labelTxt}>Picture</Label>
            <Textarea
              placeholder="Write your picture here"
              onChangeText={(e) => setPicture(e)}
              style={styles.input}
              value={picture}
              block
            />
          </View>

          <View style={[styles.form, styles.caption]}>
            <Label style={styles.labelTxt}>Caption</Label>
            <Textarea
              placeholder="Write your picture's caption here"
              onChangeText={(e) => setCaption(e)}
              style={styles.input}
              value={caption}
              block
            />
          </View>
        </ScrollView>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEFFFF',
  },
  groupBtn: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  saveGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnOutline: {
    marginTop: 20,
    borderRadius: 50,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#F26487',
  },
  btnTxtOutline: {
    color: '#F26487',
    fontSize: 12,
  },
  btnSave: {
    marginTop: 20,
    borderRadius: 50,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#145C9E',
  },
  btnTxtSave: {
    color: '#145C9E',
    fontSize: 12,
  },
  btn: {
    marginTop: 20,
    borderRadius: 50,
    justifyContent: 'center',
    marginLeft: 10,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#145C9E',
  },
  btnTxt: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  formWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  wrapper: {
    width: '90%',
  },
  form: {
    marginTop: 10,
    marginBottom: 10,
  },
  labelTxt: {
    fontSize: 16,
    color: '#145C9E',
  },
  input: {
    flex: 1,
  },
  title: {
    height: 100,
  },
  article: {
    height: 250,
  },
  picture: {
    height: 70,
  },
  caption: {
    height: 100,
  },
});
