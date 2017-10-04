import React from 'react';
import {Provider} from 'react-redux';
import {StyleProvider} from 'native-base';

import Setup from './Setup';

import configureStore from './helpers/configureStore';
import ApiClient from './helpers/apiClient';
import AppSdkFactory from './helpers/sdk';

import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

const client = new ApiClient();
const sdkFactory = new AppSdkFactory(client);
const appSdk = sdkFactory.buildSdk(2);

const store = configureStore(appSdk, client);


const Main = () => (
    <StyleProvider style={getTheme(platform)}>
        <Provider store={store}>
            <Setup/>
        </Provider>
    </StyleProvider>
);

export default Main;
