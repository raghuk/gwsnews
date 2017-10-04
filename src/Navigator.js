
import React from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import {Ionicons} from '@expo/vector-icons';

const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView>
        <Text>{banner}</Text>
        <Button
            onPress={() => navigation.navigate('Post', { name: 'Wow News' })}
            title="Open news detail" />
        <Button
            onPress={() => navigation.navigate('Event')}
            title="Open event detail" />
        <Button
            onPress={() => navigation.navigate('EventsTab')}
            title="Go to events tab" />
        <Button
            onPress={() => navigation.navigate('InfoTab')}
            title="Go to info tab" />

        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);

const PostsScreen = ({ navigation }) => (
    <MyNavScreen banner="News Screen" navigation={navigation} />
);

const PostScreen = ({ navigation }) => (
    <MyNavScreen banner={`${navigation.state.params.name}`} navigation={navigation} />
);

const EventsScreen = ({ navigation }) => (
    <MyNavScreen banner="Events Screen" navigation={navigation} />
);

const EventScreen = ({ navigation }) => (
    <MyNavScreen banner="Event Detail Screen" navigation={navigation} />
);

const InfoScreen = ({ navigation }) => (
    <MyNavScreen banner="Info Screen" navigation={navigation} />
);

const PostsTab = StackNavigator({
    Posts: {
        screen: PostsScreen,
        path: '/',
        navigationOptions: {
            title: 'Peace News'
        }
    },
    Post: {
        screen: PostScreen,
        path: '/post/:id',
        navigationOptions: ({ navigation }) => ({
            title: 'News Detail'
        })
    }
});

const EventsTab = StackNavigator({
    Events: {
        screen: EventsScreen,
        path: '/',
        navigationOptions: () => ({
            title: 'Events'
        })
    },
    Event: {
        screen: EventScreen,
        path: '/event/:id',
        navigationOptions: ({ navigation }) => ({
            title: 'Event Detail'
        })
    }
});

const InfoTab = StackNavigator({
    Info: {
        screen: InfoScreen,
        path: '/',
        navigationOptions: () => ({
            title: 'About Us'
        })
    }
});

const MainTabNavigator = TabNavigator(
    {
        PostsTab: {
            screen: PostsTab,
            path: '/',
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? 'ios-paper' : 'ios-paper-outline'}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? '#2f95dc' : '#cccccc'} />
                )
            }
        },
        EventsTab: {
            screen: EventsTab,
            path: '/events',
            navigationOptions: {
                tabBarLabel: 'Events',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? 'ios-megaphone' : 'ios-megaphone-outline'}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? '#2f95dc' : '#cccccc'} />
                )
            }
        },
        InfoTab: {
            screen: InfoTab,
            path: '/info',
            navigationOptions: {
                tabBarLabel: 'About Us',
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? '#2f95dc' : '#cccccc'} />
                )
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
    }
);

export default MainTabNavigator;
