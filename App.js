import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {firebase} from './firebase/config'
import Loading from "./screens/LoadingScreen/loading";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import Level from "./screens/Level";
import {Button} from "react-native";
import GameEasy from "./screens/GameEasy";
import GameMidle from "./screens/GameMidle"
import GameHard from "./screens/GameHard"
import Home from "./screens/Home";
import Mad from "./screens/Mad";
import Achievements from "./screens/Achievements";

const Stack = createStackNavigator();

export default function App() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.database().ref('/users/' + user.uid).once('value').then(
                    snapshot => {
                        const userData = snapshot.val();
                        setLoading(false)
                        setUser(userData);
                    }
                ).catch(error => {
                    setLoading(false)
                    alert(error)
                })
            } else {
                setLoading(false)
            }
        });
    }, []);

    const logOut = () => {
        firebase.auth().signOut().then(() => {
            setUser(null);
        })
    }

    if (loading) {
        return (
            <Loading/>
        )
    }

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            error: 'red',
        },
    };

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    {user ? (
                        <>

                            <Stack.Screen name="Home" options={{
                                headerTransparent: true,
                            }}>
                                {props => <Home {...props}/>}
                            </Stack.Screen>

                            <Stack.Screen name="Level" options={{
                                headerRight: () => (
                                    <Button
                                        onPress={() => logOut()}
                                        title="Log out"
                                    />
                                ),
                                headerTransparent: true,
                            }}>
                                {props => <Level {...props}/>}
                            </Stack.Screen>

                            <Stack.Screen name="GameEasy" component={GameEasy} options={{
                                headerTransparent: true,
                            }} />

                            <Stack.Screen name="GameMidle" component={GameMidle} options={{
                                headerTransparent: true,
                            }} />

                            <Stack.Screen name="GameHard" component={GameHard} options={{
                                headerTransparent: true,
                            }} />

                            <Stack.Screen name="Achievements" component={Achievements} options={{
                                headerTransparent: true,
                            }} />
                            <Stack.Screen name="Mad" component={Mad} options={{
                                headerTransparent: true,
                            }} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name='Login'>
                                {props => <LoginScreen {...props} setLoading={setLoading}/>}
                            </Stack.Screen>
                            <Stack.Screen name="Registration">
                                {props => <RegistrationScreen {...props} setLoading={setLoading}/>}
                            </Stack.Screen>
                        </>

                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}