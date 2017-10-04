import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import About from '../containers/about';
import Events from '../containers/events';
import News from '../containers/news';


export default TabNavigator(
    {
        News: {
            screen: News
        },
        Events: {
            screen: Events
        },
        About: {
            screen: About
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;

                switch (routeName) {
                    case 'Events':
                        iconName = `ios-megaphone${focused ? '' : '-outline'}`;
                        break;
                    case 'About':
                        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                        break;
                    case 'News':
                    default:
                        iconName = `ios-paper${focused ? '' : '-outline'}`;
                        break;
                }

                return (
                    <Ionicons
                        name={iconName}
                        size={28}
                        style={{ marginBottom: -3 }}
                        color={focused ? '#2f95dc' : '#cccccc'} />
                );
            }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
    }
);
