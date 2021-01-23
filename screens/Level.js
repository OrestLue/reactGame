import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

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
            <Text>Signup</Text>
            <Button title='Level 1' onPress={pressHandler} />
            <Button title='Level 2' onPress={pressHandlerMidleLvl} />
            <Button title='Level 3' onPress={pressHandlerHardLvl} />
            <Button title='Mad' onPress={pressHandlerMadLvl} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});