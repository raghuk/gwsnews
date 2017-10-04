import React, {Component, PropTypes} from 'react';
import {AppLoading, Asset, Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import Main from './src';


export default class App extends Component {

    static propTypes = {
        skipLoadingScreen: PropTypes.bool
    }

    static defaultProps = {
        skipLoadingScreen: false
    }

    constructor(props) {
        super(props);

        this.state = {
            isLoadingComplete: false
        };
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/default-post.png'),
                require('./assets/images/default-user.png')
            ]),
            Font.loadAsync([
                // This is the font that we are using for our tab bar
                Ionicons.font,
                // We include OpenSans because we use it in app.
                {
                    'Roboto': require('native-base/Fonts/Roboto.ttf'),
                    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
                    'Opensans': require('./assets/fonts/Opensans.ttf')
                }
            ])
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error reporting service.
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading} />
            );
        } else {
            return <Main />;
        }
    }
}
