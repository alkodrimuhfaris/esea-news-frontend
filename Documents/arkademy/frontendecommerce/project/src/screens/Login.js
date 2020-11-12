import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input, Form, Item, Button} from 'native-base';
import joi from 'joi';
import authActions from '../redux/actions/auth';
import {useDispatch} from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  const emailSchema = joi.object({
    email: joi.string().email(),
  });
  const {value: emailCheck, errEmail} = emailSchema.validate({email});
  if (errEmail) {
    setEmailErr(true);
  } else {
    setEmailErr(false);
  }

  const submitLogin = () => {
    const data = {
      email: emailCheck,
      password,
    };
    dispatch(authActions.login(data));
  };

  return (
    <View style={styles.parent}>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <Form>
          <View
            style={
              email
                ? styles.secondary
                : emailErr
                ? styles.danger
                : styles.success
            }>
            <Text
              style={
                email
                  ? styles.txtsecondary
                  : emailErr
                  ? styles.txtDanger
                  : styles.txtSuccess
              }>
              Email
            </Text>
            <Item>
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Item>
          </View>
          <View style={styles.secondary}>
            <Text style={styles.txtsecondary}>Password</Text>
          </View>
          <Item>
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Item>
          <Button style={styles.btn} block onClick={() => submitLogin()}>
            <Text>Login</Text>
          </Button>
        </Form>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  form: {
    width: '80%',
    backgroundColor: '#E5E5E5',
  },
  btn: {
    width: '100%',
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: '#457373',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  secondary: {
    width: '100%',
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.05)',
    padding: 2,
    backgroundColor: 'white',
  },
  danger: {
    width: '100%',
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.05)',
    padding: 2,
    boder: '1px solid #F01F0E',
    backgroundColor: 'white',
  },
  success: {
    width: '100%',
    boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.05)',
    padding: 2,
    backgroundColor: 'white',
    boder: '1px solid #2AA952',
  },
  txtsecondary: {
    fontSize: 15,
    color: '#9B9B9B',
  },
  txtDanger: {
    fontSize: 15,
    color: '#F01F0E',
  },
  txtSuccess: {
    fontSize: 15,
    color: '#2AA952',
  },
});
