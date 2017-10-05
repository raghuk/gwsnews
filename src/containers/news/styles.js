import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


export default {
    view: {
        flex: 1,
        backgroundColor: '#f7f7f7'
    },
    list: {
        marginTop: 10
    },
    listItem: {
        borderColor: '#f7f7f7',
        paddingVertical: 8
    },
    postPic: {
        alignSelf: 'stretch',
        height: deviceHeight / 4.5,
        width: deviceWidth / 1.08,
        position: 'relative'
    }
};
