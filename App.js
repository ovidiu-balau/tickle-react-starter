import React from 'react';
import { SignedIn, SignedOut } from './app/router';
import Loading from './app/screens/Loading';
import firebase from './app/firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null 
   * (logged out) or an Object (logged in)
   */
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }
  /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  componentWillUnmount() {
    this.authSubscription();
  }
  render() {
    // The application is initialising
    if (this.state.loading) return <Loading />;
    // The user is an Object, so they're logged in
    if (this.state.user) {
      return <SignedIn user={this.state.user} />;
    } return <SignedOut />;
  }
}
