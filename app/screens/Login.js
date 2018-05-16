import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import t from 'tcomb-form-native';

import firebase from './../components/firebase';

const { Form } = t.form;

const User = t.struct({
  email: t.String,
  password: t.String,
});

const options = {
  fields: {
    email: {
      error: 'We need an email address',
      label: 'Email address',
    },
    password: {
      password: true,
      secureTextEntry: true,
      error: 'We need a password ',
    },
  },
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    width: 50,
  }
});


export default class Login extends React.Component {
  handleSubmit = () => {
    const value = this.login.getValue(); // use that ref to get the form value
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then((user) => {
        console.log('logged in', user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Log in</Text>
        <Form
          ref={c => this.login = c}
          type={User}
          options={options} />
        <Button
          title="Log in"
          style={styles.button}
          onPress={this.handleSubmit}
        />
      </ScrollView>
    );
  }
}
