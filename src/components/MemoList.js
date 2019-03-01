import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
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
    );
  }
}
export default MemoList;

const styles = StyleSheet.create({
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
});
