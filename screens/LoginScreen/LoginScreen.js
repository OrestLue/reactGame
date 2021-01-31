import React, {useState} from 'react'
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {firebase} from '../../firebase/config'
import styles from './styles';
import {validate} from "validate.js";
import emailConstraints from "../../validate/emailConstraints";
import passwordConstraints from "../../validate/passwordConstraints";
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({navigation, setLoading}) {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailIsValid, setEmailValid] = useState(true)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordIsValid, setPasswordValid] = useState(true)

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {
        setLoading(true);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                firebase.database().ref('/users/' + uid).once('value')
                    .catch(error => {
                        alert(error)
                        setLoading(false);
                    })
            })
            .catch(error => {
                alert(error)
                setLoading(false);
            })
    }

    const onGuestLoginPress = () => {
        setLoading(true);
        firebase
            .auth()
            .signInAnonymously()
            .then((response) => {
                firebase.database().ref('users/' + response.user.uid).set({
                    username: `Guest ${response.user.uid.substring(0, 7)}`,
                    email: null,
                    phone: null,
                    score: 0
                }).catch(error => {
                    alert(error)
                })
            })
            .catch((error) => {
                alert(error)
            });
    }

    const onChangeEmail = (email) => {
        setEmail(email);
        validateEmail(email)
    };

    const validateEmail = (email) => {
        const validationResult = validate({emailAddress: email}, emailConstraints);
        if (typeof validationResult === 'undefined') {
            setEmailValid(true)
        } else {
            setEmailValid(false)
            setEmailError(validationResult.emailAddress[0])
        }
    }

    const onChangePassword = (password) => {
        setPassword(password);
        validatePassword(password)
    };

    const validatePassword = (password) => {
        const validationResult = validate({password: password}, passwordConstraints);
        if (typeof validationResult === 'undefined') {
            setPasswordValid(true)
        } else {
            setPasswordValid(false)
            setPasswordError(validationResult.password[0])
        }
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                start={{x: 0, y: 0.75}} end={{ x: 1, y: 0.25}}
                colors={['#ffdaef', '#f8daf4', '#efdbf9', '#e6dcfd', '#dbddff', '#d3e1ff', '#cbe5ff', '#c6e8ff', '#c4eeff',
                    '#c3f4ff', '#c5faff', '#c9fffc']}
                style={styles.backgroundGradient}
            >
            <KeyboardAwareScrollView
                style={{flex: 1, width: '100%'}}
                keyboardShouldPersistTaps="always">
                <View style={styles.topText}>
                    <Text style={styles.textFlip}>Flip</Text>
                    <Text style={styles.textCard}>Card</Text>
                </View>
                <TextInput
                    style={styles.input}
                    error={!emailIsValid}
                    label='E-mail'
                    mode="outlined"
                    onChangeText={(text) => onChangeEmail(text)}
                    value={email}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    autoCorrect={false}
                />

                {emailIsValid ? null :
                    <HelperText
                        visible={!emailIsValid}
                        style={styles.errorMessage}
                        type="error"
                    >
                        {emailError}
                    </HelperText>}

                <TextInput
                    style={styles.input}
                    error={!passwordIsValid}
                    secureTextEntry
                    label='Password'
                    mode="outlined"
                    onChangeText={(text) => onChangePassword(text)}
                    value={password}
                    autoCapitalize="none"
                />
                {passwordIsValid ? null :
                    <HelperText
                        visible={!passwordIsValid}
                        style={styles.errorMessage}
                        type="error"
                    >
                        {passwordError}
                    </HelperText>
                }
                <View style={styles.buttonCont}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => onGuestLoginPress()}>
                    <Text style={styles.buttonTitle}>Guest</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress}
                                                                                 style={styles.footerLink}>Sign
                        up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
            </LinearGradient>
        </View>
    )
}