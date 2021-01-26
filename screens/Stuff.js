import React from 'react'
import CardComp from 'Card'
import {View} from "react-native";

export default function CardStuff(){
    const imgContent = [
        {
            type: "Finger",
            image: require("../img/fingerprint.png")
        },
        {
            type: "Finger1",
            image: require("../img/fingerprint1.png")
        },
        {
            type: "Finger2",
            image: require("../img/fingerprint2.png")
        },
        {
            type: "Finger3",
            image: require("../img/fingerprint3.png")
        },
    ];
    return(
        <View>
            <CardComp content='A'/>
            <CardComp content='B'/>
        </View>
    )
}
