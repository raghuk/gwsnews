import React, {Component, PropTypes} from 'react';
import {Text, ActivityIndicator, Animated} from 'react-native';

import styles from './styles';


class OverlayLoader extends Component {

    static propTypes = {
        text: PropTypes.string,
        visible: PropTypes.bool,
        fadeDuration: PropTypes.number
    }

    static defaultProps = {
        text: 'Loading...',
        visible: false,
        fadeDuration: 200
    }

    constructor(props) {
        super(props);

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        let animatedOpacity = new Animated.Value(props.visible ? 1 : 0);

        this.state = {
            visible: this.props.visible,
            opacity: animatedOpacity
        }
    }

    componentWillReceiveProps(props) {
        if (this.state.visible !== props.visible) {
            props.visible ? this.show(): this.hide();
            this.setState({visible: props.visible});
        }
    }

    show() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            friction: 1,
            duration: this.props.fadeDuration
        }).start();
    }

    hide() {
        Animated.timing(this.state.opacity, {
            toValue: 0,
            friction: 1,
            duration: this.props.fadeDuration
        }).start();
    }

    render() {
        const containerStyle = {
            opacity: this.state.opacity
        };

        return (
            <Animated.View style={[styles.overlay, containerStyle]}>
                <ActivityIndicator size="large" animating={true} color="white"/>
                <Text style={styles.text}>{this.props.text}</Text>
            </Animated.View>
        );
    }
}

export default OverlayLoader;
