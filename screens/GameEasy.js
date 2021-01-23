import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import FlipCard from 'react-native-flip-card'

const a = 'A';
const g = 'G';
const z = 'Z';

export default function Level() {
    return (
        <View style={styles.container}>
            <View style={styles.cardBlock}>
                <FlipCard
                    nativeID = '1'
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text></Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.backFace}>
                        <Image style={styles.imageSize} source = {require('../img/fingerprint.png')}/>
                    </View>
                </FlipCard>
            </View>
            <View style={styles.cardBlock}>
                <FlipCard
                    nativeID = '2'
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text></Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.backFace}>
                        <Image style={styles.imageSize} source = {require('../img/fingerprint1.png')}/>
                    </View>
                </FlipCard>
            </View>
            <View style={styles.cardBlock}>
                <FlipCard
                    nativeID = '3'
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text></Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.backFace}>
                        <Image style={styles.imageSize} source = {require('../img/fingerprint.png')}/>
                    </View>
                </FlipCard>
            </View>
            <View style={styles.cardBlock}>
                <FlipCard
                    nativeID = '4'
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text></Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.backFace}>
                        <Image style={styles.imageSize} source = {require('../img/fingerprint1.png')}/>
                    </View>
                </FlipCard>
            </View>
            <View style={styles.cardBlock}>
                <FlipCard
                    nativeID = '5'
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text></Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.backFace}>
                        <Image style={styles.imageSize} source = {require('../img/fingerprint2.png')}/>
                    </View>
                </FlipCard>
            </View>
            <View style={styles.cardBlock}>
                <FlipCard
                    nativeID = '6'
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text></Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.backFace}>
                        <Image style={styles.imageSize} source = {require('../img/fingerprint.png')}/>
                    </View>
                </FlipCard>
            </View>
            <View style={styles.cardBlock}>
                <FlipCard
                    nativeID = '7'
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text></Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.backFace}>
                        <Image style={styles.imageSize} source = {require('../img/fingerprint2.png')}/>
                    </View>
                </FlipCard>
            </View>
            <View style={styles.cardBlock}>
                <FlipCard
                    nativeID = '8'
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text></Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.backFace}>
                        <Image style={styles.imageSize} source = {require('../img/fingerprint1.png')}/>
                    </View>
                </FlipCard>
            </View>
            <View style={styles.cardBlock}>
                <FlipCard
                    nativeID = '9'
                    style={styles.card}
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                    {/* Face Side */}
                    <View style={styles.face}>
                        <Text></Text>
                    </View>
                    {/* Back Side */}
                    <View style={styles.backFace}>
                        <Image style={styles.imageSize} source = {require('../img/fingerprint2.png')}/>
                    </View>
                </FlipCard>
            </View>
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
        width: '25%',
        height: 100,
        backgroundColor: 'white',
        margin: 5
    },
    imageSize: {
        width: '60%',
        height: '60%'
    },

});