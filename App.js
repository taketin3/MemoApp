import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイテム</Text>
            <Text style={styles.memoDate}>2019/03/01</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイテム</Text>
            <Text style={styles.memoDate}>2019/03/01</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイテム</Text>
            <Text style={styles.memoDate}>2019/03/01</Text>
          </View>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイテム</Text>
            <Text style={styles.memoDate}>2019/03/01</Text>
          </View>
        </View>

        <View style={styles.memoAddbutton}>
          <Text style={styles.memoAdddBtnTitle}>+</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  memoAddbutton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAdddBtnTitle: {
    fontSize: 32,
    color: '#fff',
    lineHeight: 32,

  },
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#FFF',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    color: '#a2a2a2',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265356',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
