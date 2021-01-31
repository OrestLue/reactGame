import React from 'react'
import {Alert, StyleSheet, Text, View} from 'react-native'
import Card from './CardTest'
import {LinearGradient} from 'expo-linear-gradient';
import {firebase} from "../firebase/config";

export default class GameEasy extends React.Component {
    constructor(props) {
        super(props);

        const imgContent = [
            require("../img/fingerprint.png"),
            require("../img/fingerprint1.png"),
            require("../img/fingerprint2.png"),
            require("../img/fingerprint3.png")
        ];


        const deck = imgContent
            .concat(imgContent)
            .sort(() => Math.random() - 0.5)
            .map((f, i) => {
                return {
                    id: i,
                    content: f,
                    faceUp: false,
                }
            });


        this.state = {
            deck: deck,
            firstCard: null,
            click: 0,
            guessed: 0
        }
    }

    flipCardTo(cardIdx, faceUp) {
        this.setState({
            deck: this.state.deck.map((f, i) => {
                if (i === cardIdx) {
                    return {
                        id: f.id,
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
        if (this.state.deck[cardIdx].faceUp === true) return;
        this.setState({click: this.state.click + 1})
        if (this.state.firstCard === null) {
            this.setState({firstCard: cardIdx});
        } else {
            const firstCard = this.state.deck[this.state.firstCard];
            const secondCard = this.state.deck[cardIdx];
            if (firstCard.content === secondCard.content && firstCard.id !== secondCard.id) {
                this.setState({
                    firstCard: null,
                    guessed: this.state.guessed + 1
                });

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

    updateUserScore = (newScore) => {
        const userRef = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userRef).once('value').then(
            snapshot => {
                return snapshot.val().score;
            }
        ).then(r => {
            firebase.database().ref('/users/' + userRef).update({
                score: r + newScore
            })
        })
    }

    showAlert = () => {
        let score = Math.round(10 / this.state.click * 100);
        this.updateUserScore(score);
        Alert.alert(
            "Winner",
            `Your score is: ${score}`,
            [
                {text: "OK", onPress: () => this.props.navigation.navigate('Level')}
            ],
            {cancelable: false}
        );
    }

    render() {
        if (this.state.guessed === this.state.deck.length / 2) {
            this.showAlert();
        }
        return (
            <View>
                <LinearGradient
                    start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                    colors={['#f9c5c5', '#fbceb9', '#f2dab5', '#e2e7bb', '#cdf3ce', '#bff6e0', '#b9f6f1', '#bdf5ff',
                        '#caedfd', '#d6e6f5', '#dde0e9', '#dcdcdc']}
                    colors={['#12c2e9', '#c471ed', '#f64f59']}
                    style={styles.linGrad}>
                    <View style={styles.container}>
                        {this.state.deck.map((f, i) => {
                            return (
                                <Card
                                    key={i}
                                    style={{width: 100, height: 100, margin: 10}}
                                    flip={() => {
                                        this.flip(i)
                                    }}
                                    content={f.content}
                                    faceUp={f.faceUp}/>
                            )
                        })}
                        <LinearGradient
                            // Button Linear Gradient
                            start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
                            colors={['#FFFFFF', '#FFFFFF']}
                            style={styles.trainingBlock}>
                            <Text style={{fontSize: 10, fontWeight: 'bold', textAlign: 'center', color: '#000000'}}>This
                                Is Just A Training Game, Don't Panic</Text>
                        </LinearGradient>
                    </View>
                </LinearGradient>
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
    linGrad: {
        width: '100%',
        height: '100%'
    },
    trainingBlock: {
        width: '25%',
        height: '17%',
        backgroundColor: '#FEB12C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#FB131B',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
        padding: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '25%'
    },
});