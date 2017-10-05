import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';


class Posts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hi there... we are in news page.</Text>
            </View>
        );
    }
}

export default Posts;
