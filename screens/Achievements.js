import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {firebase} from "../firebase/config";

export default class Achievements extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        let usrRef = firebase.database().ref("users");
        usrRef.once('value').then(snapshot => {
            const users = this.snapshotToArray(snapshot).splice(0, 10);
            users.sort((b, a) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0))
            this.setState({
                users: users
            })
        })
    }

    snapshotToArray = (snapshot) => {
        let returnArr = [];

        snapshot.forEach(function (childSnapshot) {
            let item = childSnapshot.val();
            item.key = childSnapshot.key;

            returnArr.push(item);
        });

        return returnArr;
    };

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.users.map((user, i) => {
                        return (
                            <View>
                                <Text>
                                    {user.score + "  "}
                                </Text>
                            </View>
                        )
                    })
                    }
                    </View>
                    )
                }
                }

    const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '25%'
        },
    });