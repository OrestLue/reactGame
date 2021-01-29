import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {firebase} from './firebase/config'
import Loading from "./screens/LoadingScreen/loading";
import Navigator from './routes/homeStack'
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";

const Stack = createStackNavigator();

export default function App() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user);
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
            {user ? (
                <Navigator/>
            ) : (
                <NavigationContainer>
                    <Stack.Navigator>
                        <>
                            <Stack.Screen name='Login'>
                                {props => <LoginScreen {...props} setLoading={setLoading}/>}
                            </Stack.Screen>
                            <Stack.Screen name="Registration">
                                {props => <RegistrationScreen {...props} setLoading={setLoading}/>}
                            </Stack.Screen>
                        </>
                    </Stack.Navigator>
                </NavigationContainer>
            )}

        </PaperProvider>
    );
}