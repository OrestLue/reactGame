import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Level({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('GameEasy')
    };
    const pressHandlerMidleLvl = () => {
        navigation.navigate('GameMidle')
    };

    const pressHandlerHardLvl = () => {
        navigation.navigate('GameHard')
    };

    const pressHandlerMadLvl = () => {
        navigation.navigate('Mad')
    };

    return (

        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                colors={[ '#12c2e9' , '#c471ed' , '#f64f59']}
                style={styles.background}
            >
                <View style={styles.buttonsContainer}>
                    <Text style={styles.chooseGameText}>Ready?</Text>
                    <LinearGradient
                        // Background Linear Gradient
                        start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                        colors={[ '#12c2e9' , '#c471ed' , '#f64f59']}
                        style={styles.buttonsList}
                    >
                    <TouchableOpacity onPress={pressHandler}>
                        <Text style={styles.chooseGameTextInButt}>Training</Text>
                    </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                        // Background Linear Gradient
                        start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                        colors={[ '#12c2e9' , '#c471ed' , '#f64f59']}
                        style={styles.buttonsList}
                    >
                        <TouchableOpacity onPress={pressHandlerMidleLvl}>
                            <Text style={styles.chooseGameTextInButt}>Normal</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                        // Background Linear Gradient
                        start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                        colors={[ '#12c2e9' , '#c471ed' , '#f64f59']}
                        style={styles.buttonsList}
                    >
                        <TouchableOpacity onPress={pressHandlerHardLvl}>
                            <Text style={styles.chooseGameTextInButt}>Middle</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    {/*
                    <TouchableOpacity style={styles.buttonsList} onPress={pressHandlerMadLvl}>
                        <Text style={styles.chooseGameTextInButt}>Mad</Text>
                    </TouchableOpacity>
                    */}
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
    chooseGameText: {
        color: '#FFFFFF',
        fontSize: 27,
        fontWeight: '700',
        marginBottom: 30,
        marginTop: 30
    },
    buttonsContainer: {
        backgroundColor: 'rgba(1,1,1,0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingBottom: 60,
        width: '70%',
    },
    buttonsList: {
        backgroundColor: '#03A4EF',
        width: '60%',
        paddingTop: 13,
        paddingBottom: 13,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 10,
        marginTop: 2,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chooseGameTextInButt: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF'
    }
});