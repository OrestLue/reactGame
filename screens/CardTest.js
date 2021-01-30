import React, { Component } from "react";
import FlipCard from "react-native-flip-card";
import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

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
        let backImage = require('../img/CardImg.png');
        return(
                <TouchableOpacity onPress={this.props.flip} style={[{...this.props.style}, this.props.faceUp ? styles.backFace : styles.cardBlock]}>
                    <Image style={this.props.faceUp ? styles.imageSize : styles.frontImageSize} source={this.props.faceUp ? content : backImage} />
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    cardBlock: {
        margin: 5,
        backgroundColor: '#030303',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#FB131B',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    },
    card: {
        width: '100%',
        borderRadius: 5,
    },
    face: {
        backgroundColor: '#030303',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    backFace:{
        backgroundColor: '#FB131B',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    imageSize: {
        width: '60%',
        height: '60%'
    },
    frontImageSize: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
});