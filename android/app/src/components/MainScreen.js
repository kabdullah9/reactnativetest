import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AddMediaTab from './AppTabNavigation/AddMedia/AddMediaTab';
import HomeTab from './AppTabNavigation/Home/HomeTab';
import ProfileTab from './AppTabNavigation/Profile/ProfileTab';
import SearchTab from './AppTabNavigation/Search/SearchTab';

import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';




class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name='ios-camera-outline'/>,
        title: 'Mammlez',
    }

    render() {
        return (
            <AppTabNavigator />
        );
    }
}



export default MainScreen;

const AppTabNavigator = TabNavigator({
    HomeTab: HomeTab,
    SearchTab: SearchTab,
    AddMediaTab: AddMediaTab,
    ProfileTab: ProfileTab,




});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    headerLeft: {
    
    }
});
