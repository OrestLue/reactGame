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
                start={{x: 0, y: 0.75}} end={{ x: 1, y: 0.25}}
                colors={['#ffdaef', '#f8daf4', '#efdbf9', '#e6dcfd', '#dbddff', '#d3e1ff', '#cbe5ff', '#c6e8ff', '#c4eeff',
                    '#c3f4ff', '#c5faff', '#c9fffc']}
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
        backgroundColor: 'rgba(1,1,1,0.7)',
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