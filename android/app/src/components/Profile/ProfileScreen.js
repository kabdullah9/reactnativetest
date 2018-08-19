import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen of Mammalz!</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Profile: {
    screen: ProfileScreen
  },
});