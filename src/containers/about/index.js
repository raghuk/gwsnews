import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';


class About extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.content}>Hi there... we are in about page.</Text>
            </View>
        );
    }
}

export default About;
