import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
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

    const pressHandlerAchievements = () => {
        navigation.navigate('Achievements')
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
                <View style={styles.buttonsContainer}>
                    <Text style={styles.chooseGameText}>Ready?</Text>
                    <LinearGradient
                        // Background Linear Gradient
                        start={{x: 1, y: 1}} end={{x: 0.8, y: 0.0}}
                        colors={[ '#f9c5c5', '#fbceb9', '#f2dab5', '#e2e7bb', '#cdf3ce', '#bff6e0', '#b9f6f1', '#bdf5ff',
                            '#caedfd', '#d6e6f5', '#dde0e9', '#dcdcdc']}
                        style={styles.buttonsList}
                    >
                    <TouchableOpacity onPress={pressHandler}>
                        <Text style={styles.chooseGameTextInButt}>Training</Text>
                    </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                        // Background Linear Gradient
                        start={{x: 1, y: 1}} end={{x: 0.8, y: 0.0}}
                        colors={[ '#f9c5c5', '#fbceb9', '#f2dab5', '#e2e7bb', '#cdf3ce', '#bff6e0', '#b9f6f1', '#bdf5ff',
                            '#caedfd', '#d6e6f5', '#dde0e9', '#dcdcdc']}
                        style={styles.buttonsList}
                    >
                        <TouchableOpacity onPress={pressHandlerMidleLvl}>
                            <Text style={styles.chooseGameTextInButt}>Normal</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient
                        // Background Linear Gradient
                        start={{x: 1, y: 1}} end={{x: 0.8, y: 0.0}}
                        colors={[ '#f9c5c5', '#fbceb9', '#f2dab5', '#e2e7bb', '#cdf3ce', '#bff6e0', '#b9f6f1', '#bdf5ff',
                            '#caedfd', '#d6e6f5', '#dde0e9', '#dcdcdc']}
                        style={styles.buttonsList}
                    >
                        <TouchableOpacity onPress={pressHandlerHardLvl}>
                            <Text style={styles.chooseGameTextInButt}>Middle</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View>
                    <TouchableOpacity onPress={pressHandlerAchievements}>
                        <View style={styles.cupContainer}>
                        <Image style={{width: 30, height: 30}} source={require('../img/cup.png')}/>
                        </View>
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
        color: '#FFFFFF',
    },
    cupContainer: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'rgba(1,1,1,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

    }
});