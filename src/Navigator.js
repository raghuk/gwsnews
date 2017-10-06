
import React from 'react';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

import {Ionicons} from '@expo/vector-icons';

import About from './containers/about';
import {Events, Event} from './containers/events';
import {Posts, Post} from './containers/news';

const NewsTab = StackNavigator({
    Posts: {
        screen: Posts,
        path: '/',
        navigationOptions: () => ({
            title: 'Peace News',
            headerStyle: {
                backgroundColor: '#1b6888'
            },
            headerTitleStyle: {
                color: '#fdfdfd'
            }
        })
    },
    Post: {
        screen: Post,
        path: '/post/:id',
        navigationOptions: ({ navigation }) => ({
            title: 'News Detail',
            headerStyle: {
                backgroundColor: '#1b6888'
            },
            headerTitleStyle: {
                color: '#fdfdfd'
            }
        })
    }
});

const EventsTab = StackNavigator({
    Events: {
        screen: Events,
        path: '/',
        navigationOptions: () => ({
            title: 'Events',
            headerStyle: {
                backgroundColor: '#1b6888'
            },
            headerTitleStyle: {
                color: '#fdfdfd'
            }
        })
    },
    Event: {
        screen: Event,
        path: '/event/:id',
        navigationOptions: ({ navigation }) => ({
            title: 'Event Detail',
            headerStyle: {
                backgroundColor: '#1b6888'
            },
            headerTitleStyle: {
                color: '#fdfdfd'
            }
        })
    }
});

const InfoTab = StackNavigator({
    Info: {
        screen: About,
        path: '/',
        navigationOptions: () => ({
            title: 'About Us',
            headerStyle: {
                backgroundColor: '#1b6888'
            },
            headerTitleStyle: {
                color: '#fdfdfd'
            }
        })
    }
});

const MainTabNavigator = TabNavigator(
    {
        NewsTab: {
            screen: NewsTab,
            path: '/',
            navigationOptions: {
                tabBarLabel: 'News',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-paper' : 'ios-paper-outline'}
                        size={26}
                        style={{ marginBottom: -3 }}
                        color={focused ? '#2f95dc' : '#222222'} />
                )
            }
        },
        EventsTab: {
            screen: EventsTab,
            path: '/events',
            navigationOptions: {
                tabBarLabel: 'Events',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-megaphone' : 'ios-megaphone-outline'}
                        size={26}
                        style={{ marginBottom: -3 }}
                        color={focused ? '#2f95dc' : '#222222'} />
                )
            }
        },
        InfoTab: {
            screen: InfoTab,
            path: '/info',
            navigationOptions: {
                tabBarLabel: 'About',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
                        size={26}
                        style={{ marginBottom: -3 }}
                        color={focused ? '#2f95dc' : '#222222'} />
                )
            }
        }
    },
    {
        initialRouteName: 'NewsTab',
        backBehavior: 'none',
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
    }
);

export default MainTabNavigator;
