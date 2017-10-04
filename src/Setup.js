import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import MainTabNavigator from './Navigator';


class Setup extends Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                <MainTabNavigator />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: '#000000'
    }
});

export default Setup;
