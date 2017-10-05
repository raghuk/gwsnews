
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
            title: 'Peace News'
        })
    },
    Post: {
        screen: Post,
        path: '/post/:id',
        navigationOptions: ({ navigation }) => ({
            title: 'News Detail'
        })
    }
});

const EventsTab = StackNavigator({
    Events: {
        screen: Events,
        path: '/',
        navigationOptions: () => ({
            title: 'Events'
        })
    },
    Event: {
        screen: Event,
        path: '/event/:id',
        navigationOptions: ({ navigation }) => ({
            title: 'Event Detail'
        })
    }
});

const InfoTab = StackNavigator({
    Info: {
        screen: About,
        path: '/',
        navigationOptions: () => ({
            title: 'About Us'
        })
    }
});

const MainTabNavigator = TabNavigator(
    {
        NewsTab: {
            screen: NewsTab,
            path: '/'
        },
        EventsTab: {
            screen: EventsTab,
            path: '/events'
        },
        InfoTab: {
            screen: InfoTab,
            path: '/info'
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;

                switch (routeName) {
                    case 'EventsTab':
                        iconName = `ios-megaphone${focused ? '' : '-outline'}`;
                        break;
                    case 'InfoTab':
                        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                        break;
                    case 'NewsTab':
                    default:
                        iconName = `ios-paper${focused ? '' : '-outline'}`;
                        break;
                }

                return (
                    <Ionicons
                        name={iconName}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? '#2f95dc' : '#222222'} />
                );
            }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
    }
);

export default MainTabNavigator;
