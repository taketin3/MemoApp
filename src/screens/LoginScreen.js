import React from 'react';
import { SecureStore } from 'expo';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  StyleSheet, View, TextInput, Text, TouchableHighlight, TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';

import Loading from '../elements/Loading';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    isLoading: true,
  }

  async componentDidMount() {
    const email = await SecureStore.getItemAsync('email');
    const password = await SecureStore.getItemAsync('password');
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ isLoading: false });
        this.navigatteToHome();
      });
  }

  navigatteToHome() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName :'Home' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  // eslint-disable-next-line
  handleSubmit() {
    // SecureStore.deleteItemAsync('email');
    // SecureStore.deleteItemAsync('password');
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
        SecureStore.setItemAsync('email', this.state.email);
        SecureStore.setItemAsync('password', this.state.password);
        this.navigatteToHome();
      })
      .catch((error) => {
        SecureStore.getItemAsync('email')
          .then((email) => {
            console.log(email);
          });
        console.log(error);
      });
    // this.props.navigation.navigate('MemoList');
  }

  handlePress() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <Loading text="ログイン中" isLoading={this.state.isLoading} />
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Adress"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#C70F66">
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
          <Text style={styles.signupText}>メンバー登録する</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#FFF',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    padding: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 18,
  },
  signup: {
    marginTop: 18,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
  },
});

export default LoginScreen;
