//import React from 'react'
//import {Text, View, Button, Image, StyleSheet} from 'react-native'
//import FlipCard from 'react-native-flip-card'
//
//export default function CardComp() {
//    return (
//        <View style={styles.cardBlock}>
//            <FlipCard
//                nativeID = '1'
//                style={styles.card}
//                friction={6}
//                perspective={1000}
//                flipHorizontal={true}
//                flipVertical={false}
//                flip={false}
//                clickable={true}
//                onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
//            >
//                {/* Face Side */}
//                <View style={styles.face} />
//                {/* Back Side */}
//                <View style={styles.backFace}>
//                    <Image style={styles.imageSize} source = {require('../img/fingerprint.png')}/>
//                </View>
//            </FlipCard>
//        </View>
//    )
//}
//
//const styles = StyleSheet.create({
//    cardBlock: {
//        width: '25%',
//        height: 100,
//        backgroundColor: 'white',
//        margin: 5
//    },
//    card: {
//        width: '100%',
//        borderRadius: 5,
//    },
//    face: {
//        backgroundColor: '#FEB12C',
//        height: '100%',
//        borderRadius: 10,
//        justifyContent: 'center',
//        alignItems: 'center',
//    },
//    backFace:{
//        backgroundColor: '#FD474C',
//        height: '100%',
//        borderRadius: 10,
//        justifyContent: 'center',
//        alignItems: 'center',
//    },
//    imageSize: {
//        width: '60%',
//        height: '60%'
//    },
//});