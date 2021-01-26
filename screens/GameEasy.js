import React from 'react'
import { StyleSheet, View } from 'react-native'
import Card from './CardTest'
import CardTest from './CardTest'

export default class CardStuff extends React.Component{
    constructor(props) {
        super(props);
        const imgContent = [
            'A',
            'B',
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
                }, 2000)
            }
        }

        this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp)
    }
    render() {
        return (
            this.state.deck.map((f, i) => {
                return (
                    <View style={styles.container}>
                        <Card
                            flip={() => {this.flip(i)}}
                            content={f.content}
                            faceUp={f.faceUp}/>
                    </View>
                )
            })
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '85%',
        backgroundColor: 'grey',
        marginTop: 50,
        justifyContent: 'center'
    },
});