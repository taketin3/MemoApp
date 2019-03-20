import React from 'react';
import { View, Text, Button } from 'react-native';

class Stack1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Stack1',
    headerLeft: (
      <Text name="bars" size={24} onPress={() => { navigation.openDrawer(); }} style={{ paddingLeft:20 }}>
        ■
      </Text>
    ),
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Stack1</Text>
        <Button
          title="Goto Stack2"
          onPress={() => this.props.navigation.navigate('Stack2')}
        />
      </View>
    );
  }
}

export default Stack1;
