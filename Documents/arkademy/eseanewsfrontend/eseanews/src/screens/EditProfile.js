/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Input, Form, Item, DatePicker, Button, Label} from 'native-base';
import RadioButton from './src/components/RadioButton';
import Toggle from './src/components/Toggle';

export default function ChangeProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [dateBirth, setDateBirth] = useState('');
  const [checked, setChecked] = useState(0);
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');
  const [notifArticle, setNotifArticle] = useState(false);
  const toggleArticle = () =>
    setNotifArticle((previousState) => !previousState);
  const [notifEvent, setNotifEvent] = useState(false);
  const toggleEvent = () => setNotifEvent((previousState) => !previousState);

  const genders = ['Male', 'Female'];

  const changeGender = (e) => {
    setChecked(e);
  };

  useEffect(() => {
    let genderSelected = genders[checked];
    setGender(genderSelected);
  }, [checked]);

  const settingDate = (e) => {
    e = e.toISOString().split('T');
    let [date] = e;
    setDateBirth(date);
  };

  useEffect(() => {
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(dateBirth);
    console.log(gender);
  }, [name, email, phone, dateBirth, gender]);

  const phoneCheck = (e) => {
    e = e.replace(/[^0-9]/g, '');
    setPhone(e);
  };

  return (
    <ScrollView>
      <Form style={styles.container}>
        <Text style={styles.title}>Setting</Text>

        <Text style={styles.subTitle}>Personal Information</Text>
        <View style={styles.profilePicCont}>
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  'http://52.200.32.180:8080/Uploads/2-product_image-1603966940378.jpg',
              }}
              style={styles.profilePic}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.secondary}>
          <Item floatingLabel style={styles.floatingLbl}>
            <Label style={styles.labelTxt}>Name</Label>
            <Input
              placeholder="Name"
              onChangeText={(e) => setName(e)}
              style={styles.input}
              value={name}
            />
          </Item>
        </View>

        <View style={styles.secondary}>
          <Item floatingLabel style={styles.floatingLbl}>
            <Label style={styles.labelTxt}>Email</Label>
            <Input
              placeholder="Email"
              onChangeText={(e) => setEmail(e)}
              style={styles.input}
              value={email}
            />
          </Item>
        </View>

        <View style={styles.secondary}>
          <Item floatingLabel style={styles.floatingLbl}>
            <Label style={styles.labelTxt}>Phone</Label>
            <Input
              placeholder="Phone"
              keyboardType="numeric"
              onChangeText={(e) => phoneCheck(e)}
              value={phone}
              style={styles.input}
            />
          </Item>
        </View>

        <View style={styles.secondary}>
          <Label style={styles.labelTxt}>Date of Birth</Label>
          <DatePicker
            defaultDate={new Date(2000, 1, 1)}
            minimumDate={new Date(1900, 1, 1)}
            maximumDate={new Date()}
            modalTransparent={false}
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText="Select date"
            textStyle={styles.labelTxt}
            placeHolderTextStyle={styles.labelTxt}
            onDateChange={(e) => settingDate(e)}
            disabled={false}
          />
        </View>

        <View style={styles.radioWrapper}>
          <Text style={[styles.subTitle, styles.radioLabel]}>Gender</Text>
          <RadioButton
            setChecked={changeGender}
            checked={checked}
            genders={genders}
          />
        </View>

        <View style={styles.alignWrap}>
          <Text style={styles.subTitle}>Password</Text>
          <Text style={styles.changePass}>Change</Text>
        </View>

        <View style={styles.secondary}>
          <Item floatingLabel style={styles.floatingLbl}>
            <Label style={styles.labelTxt}>Old Password</Label>
            <Input
              placeholder="Old Password"
              secureTextEntry
              value={password}
              onChangeText={(e) => setPassword(e)}
              style={styles.input}
            />
          </Item>

          <Item floatingLabel style={styles.floatingLbl}>
            <Label style={styles.labelTxt}>New Password</Label>
            <Input
              placeholder="New Password"
              secureTextEntry
              value={newPassword}
              onChangeText={(e) => setNewPassword(e)}
              style={styles.input}
            />
          </Item>

          <Item floatingLabel style={styles.floatingLbl}>
            <Label style={styles.labelTxt}>Confirm New Password</Label>
            <Input
              placeholder="newPassword"
              secureTextEntry
              onChangeText={(e) => setConfirmNewPass(e)}
              value={confirmNewPass}
              style={styles.input}
            />
          </Item>
        </View>

        <Text style={styles.subTitle}>Notification</Text>

        <View style={styles.alignWrap}>
          <Text style={styles.toglerTxt}>New Articles</Text>
          <View>
            <Toggle isEnabled={notifArticle} toggleSwitch={toggleArticle} />
          </View>
        </View>
        <View style={styles.alignWrap}>
          <Text style={styles.toglerTxt}>Event from eSea</Text>
          <View>
            <Toggle isEnabled={notifEvent} toggleSwitch={toggleEvent} />
          </View>
        </View>

        <Button style={styles.btn} block>
          <Text style={styles.btnTxt} block>
            SAVE
          </Text>
        </Button>
      </Form>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  floatingLbl: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1F271B',
  },
  profilePicCont: {
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
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
    color: '#1F271B',
  },
  radioWrapper: {
    marginTop: 10,
    marginBottom: 10,
  },
  floatingSave: {
    position: 'absolute',
    top: 30,
    right: 30,
    color: '#084F6C',
    padding: 5,
    borderRadius: 30,
    justifyContent: 'center',
  },
  saveTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 34,
    color: '#084F6C',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#084F6C',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  radioLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  alignWrap: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#084F6C',
  },
  changePass: {
    fontSize: 14,
    color: '#457373',
  },
  toglerTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#084F6C',
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#084F6C',
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
