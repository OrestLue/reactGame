import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Level')
    };

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title='Go' onPress={pressHandler} />
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
    backgrounfColor: {

    },
});