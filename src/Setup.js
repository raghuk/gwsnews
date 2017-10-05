import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Constants} from 'expo';

import MainTabNavigator from './Navigator';


class Setup extends Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
                {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                <MainTabNavigator />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    statusBarUnderlay: {
        height: Constants.statusBarHeight,
        backgroundColor: '#929292'
    }
});

export default Setup;
