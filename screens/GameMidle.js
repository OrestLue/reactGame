import React from 'react'
import { StyleSheet, View, Text, Alert, Button } from 'react-native'
import Card from './CardTest'
import CardTest from './CardTest'

export default class CardStuff extends React.Component{
    constructor(props) {
        super(props);

        const imgContent = [
            require("../img/fingerprint.png"),
            require("../img/fingerprint1.png"),
            require("../img/fingerprint2.png"),
            require("../img/fingerprint3.png"),
            require("../img/fingerprint4.png"),
            require("../img/fingerprint5.png"),
            require("../img/fingerprint6.png"),
            require("../img/fingerprint7.png"),
        ];


        const deck = imgContent
            .concat(imgContent)
            .sort(() => Math.random() - 0.5)
            .map(f => {
                return {
                    content: f,
                    faceUp: false,
                }
            });


        this.state = {
            deck: deck,
            firstCard: null
        }
    }

    flipCardTo(cardIdx, faceUp) {
        this.setState({
            deck: this.state.deck.map((f, i) => {
                if(i === cardIdx) {
                    return {
                        content: f.content,
                        faceUp: !f.faceUp,
                    }
                } else {
                    return f;
                }
            })
        })
    }


    flip(cardIdx) {
        if(this.state.firstCard === null) {
            this.setState({firstCard: cardIdx});
        } else {
            const firstCardContent = this.state.deck[this.state.firstCard].content;
            const secondCardContent = this.state.deck[cardIdx].content;
            if(firstCardContent === secondCardContent) {
                this.setState({firstCard: null});
            } else {
                setTimeout(() => {
                    this.flipCardTo(this.state.firstCard, false);
                    this.flipCardTo(cardIdx, false);
                    this.setState({firstCard: null})
                }, 1000)
            }
        }

        this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp)
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.deck.map((f, i) => {
                    return (
                        <Card
                            key={i}
                            style={{width: '20%', height: 80, backgroundColor: '#FEB12C', margin: 10}}
                            flip={() => {this.flip(i)}}
                            content={f.content}
                            faceUp={f.faceUp}/>
                    )
                })}
                <View>
                    <Button title='Go' onPress={alert} />
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    backCol: {
        backgroundColor: 'red',
    },
    infoBlock: {
        marginTop: 90,
    },
    trainingBlock: {
        width: '25%',
        height: '17%',
        backgroundColor: '#FEB12C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FF433E',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '25%'
    },
});