/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Input, Form, Item, Button, Label, Textarea} from 'native-base';

export default function ChangeProfile() {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [article, setArticle] = useState('');

  useEffect(() => {
    console.log(title);
    console.log(caption);
    console.log(article);
  }, [title, caption, article]);

  return (
    <KeyboardAvoidingView style={styles.parent}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.saveBtn}>
          <Button style={styles.btnSave}>
            <Text style={styles.btnTxtSave}>SAVE TO DRAFT</Text>
          </Button>

          <Button style={styles.btn}>
            <Text style={styles.btnTxt}>PUBLISH</Text>
          </Button>
        </View>

        <ScrollView style={styles.scroll}>
          <Form style={styles.container}>
            <View style={styles.secondary}>
              <Item floatingLabel style={styles.floatingLbl}>
                <Label style={styles.labelTxt}>Title</Label>
                <Textarea
                  placeholder="Title"
                  onChangeText={(e) => setTitle(e)}
                  style={styles.input}
                  value={title}
                  block
                />
              </Item>
            </View>
          </Form>
        </ScrollView>

        <ScrollView style={styles.scroll}>
          <Form style={styles.container}>
            <View style={styles.secondary}>
              <Item floatingLabel style={styles.floatingLbl}>
                <Label style={styles.labelTxt}>Caption</Label>
                <Textarea
                  placeholder="Caption"
                  onChangeText={(e) => setCaption(e)}
                  style={styles.input}
                  value={caption}
                />
              </Item>
            </View>
          </Form>
        </ScrollView>

        <ScrollView style={styles.scroll}>
          <Form style={styles.container}>
            <View style={styles.secondary}>
              <Item floatingLabel style={styles.floatingLbl}>
                <Label style={styles.labelTxt}>Article</Label>
                <Textarea
                  placeholder="Article"
                  onChangeText={(e) => setArticle(e)}
                  style={styles.input}
                  value={article}
                />
              </Item>
            </View>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  saveBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  parent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEFFFF',
  },
  wrapper: {
    backgroundColor: '#FEFFFF',
    width: '80%',
  },
  scroll: {
    height: 'auto',
  },
  container: {
    position: 'relative',
    marginBottom: 10,
  },
  floatingLbl: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F26487',
  },
  secondary: {
    marginTop: 10,
    marginBottom: 20,
    elevation: 5,
    borderRadius: 10,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelTxt: {
    fontSize: 16,
    color: '#F26487',
  },
  title: {
    marginLeft: 20,
    fontSize: 34,
    color: '#145C9E',
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 10,
  },
  forgot: {
    marginRight: 2,
    color: '#084F6C',
  },
  btn: {
    marginTop: 20,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#145C9E',
  },
  btnTxt: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnSave: {
    marginTop: 20,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#F26487',
  },
  btnTxtSave: {
    color: '#F26487',
    fontSize: 14,
  },
  buttonWrapper: {
    elevation: 5,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
