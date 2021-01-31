import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import {firebase} from "../firebase/config";

export default function Achievements() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        let usrRef = firebase.database().ref("users");
        usrRef.once('value').then(snapshot => {
            const users = snapshotToArray(snapshot);
            users.sort((b, a) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0))
            setUsers(users.splice(0, 8));
        })
    }

    const snapshotToArray = (snapshot) => {
        let returnArr = [];

        snapshot.forEach(function (childSnapshot) {
            let item = childSnapshot.val();
            item.key = childSnapshot.key;

            returnArr.push(item);
        });

        return returnArr;
    };

    return (
        <LinearGradient
            // Background Linear Gradient
            start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}
            colors={['#ffdaef', '#f8daf4', '#efdbf9', '#e6dcfd', '#dbddff', '#d3e1ff', '#cbe5ff', '#c6e8ff', '#c4eeff',
                '#c3f4ff', '#c5faff', '#c9fffc']}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.tabList}>
                    <Text style={styles.topUsersText}>Top Users</Text>
                    {users.map((user, index) => {
                        return (
                            <View key={index} style={styles.userContainer}>
                                <Text style={styles.userText}>{`${index + 1}. ${user.username}: ${user.score}`}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabList: {
        width: 300,
        height: 470,
        backgroundColor: 'rgba(250,250,250,0.5)',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 10,
        alignItems: 'center'
    },
    topUsersText: {
        paddingTop: 20,
        fontSize: 24,
        fontWeight: '300',
        marginBottom: 20
    },
    userContainer: {
        width: '85%',
        height: 40,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 15,
        marginTop: 5,
        marginBottom: 5
    },
    userText: {
        fontSize: 15,
        fontWeight: '600'
    },
});