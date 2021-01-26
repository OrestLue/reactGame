import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import FlipCard from 'react-native-flip-card'
import CardComp from "./Card";

const a = 'A';
const g = 'G';
const z = 'Z';

export default function GameMidle() {
    return (
        <View style={styles.container}>
            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>

            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>

            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>

            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '85%',
        backgroundColor: '#fff',
        marginTop: 100,
        justifyContent: 'center'
    },
    card: {
        width: '100%',
        borderRadius: 5,
    },
    face: {
        backgroundColor: '#FEB12C',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backFace:{
        backgroundColor: '#FD474C',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        lineHeight: 470,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    cardBlock: {
        width: '20%',
        height: 80,
        backgroundColor: 'white',
        margin: 5
    },

});