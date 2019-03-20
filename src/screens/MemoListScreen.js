import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';


// () => { this.props.navigation.navigate('MemoEdit'); }
class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentWillMount() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const tmpList = [];
        snapshot.forEach((doc) => {
          tmpList.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ memoList: tmpList });
      });
  }

  // eslint-disable-next-line
  handlePress() {
    this.props.navigation.navigate('BarCode');
    // this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});
export default MemoListScreen;
