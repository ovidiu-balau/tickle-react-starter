import React from 'react';
import { StyleSheet, View, Alert, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { Text } from 'react-native-elements';

export default class Main extends React.Component {
  logOut() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text h3>Hi!</Text>
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: '#bcbec1' }}
          title="Logout"
          onPress={this.logOut}
        />
      </View >
    );
  }
}

