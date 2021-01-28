import React, { Component } from "react";
import FlipCard from "react-native-flip-card";
import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";

export default class CardTest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let content;
        if(this.props.faceUp) {
            content = this.props.content;
        } else {
            content = ''
        }
        return(
            <TouchableOpacity onPress={this.props.flip} style={[{...this.props.style}, this.props.faceUp ? styles.backFace : styles.cardBlock]}>
                <Text>{content}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cardBlock: {
        backgroundColor: '#FEB12C',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    card: {
        width: '100%',
        borderRadius: 5,
    },
    face: {
        backgroundColor: '#262626',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    backFace:{
        backgroundColor: '#FD474C',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    imageSize: {
        width: '60%',
        height: '60%'
    },
});