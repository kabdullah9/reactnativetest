import React, {Component} from 'react';
import { View, Text } from 'react-native';


class HomeTab extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen of Mammalz!</Text>
      </View>
    );
  }
}

export default HomeTab;
