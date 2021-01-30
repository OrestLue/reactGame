import React from 'react'
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Level')
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient


                colors={[ '#f9c5c5', '#fbceb9', '#f2dab5', '#e2e7bb', '#cdf3ce', '#bff6e0', '#b9f6f1', '#bdf5ff',
                    '#caedfd', '#d6e6f5', '#dde0e9', '#dcdcdc']}
                style={styles.background}
            >
            <Image style={{width: 250, height: 250}} source={require('../img/logoCard.png')} />
                <View style={styles.goButton}>
                <TouchableOpacity onPress={pressHandler}>
                    <Text style={styles.chooseGameTextInButt}>Start</Text>
                </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    goButton: {
        backgroundColor: '#030303',
        width: 90,
        height: 90,
        borderRadius: 10,
        marginTop: 2,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 20,
        elevation: 10,
    },
    chooseGameTextInButt: {
        fontSize: 19,
        fontWeight: '700',
        color: '#FFFFFF'
    }
});