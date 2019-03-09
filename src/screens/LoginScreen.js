import React from 'react';
import {
  StyleSheet, View, TextInput, Text, TouchableHighlight,
} from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  // eslint-disable-next-line
  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
        this.props.navigation.navigate('Home', { currentUser: user });
      })
      .catch((error) => {
        console.log(error);
      });
    // this.props.navigation.navigate('MemoList');
  }

  render() {
    return (
      <View style={styles.container}>
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
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#C70F66">
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
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
});

export default LoginScreen;
