import React, {useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {HelperText, TextInput} from 'react-native-paper';
import {firebase} from '../../firebase/config'
import styles from './styles';

import {validate} from 'validate.js';

import emailConstraints from '../../validate/emailConstraints';
import passwordConstraints from "../../validate/passwordConstraints";
import confirmPasswordConstraints from "../../validate/confirmPasswordConstraints";
import usernameConstraints from "../../validate/usernameConstraints";
import {LinearGradient} from "expo-linear-gradient";

export default function RegistrationScreen({navigation, setLoading}) {
    const [fullName, setFullName] = useState('')
    const [fullNameError, setFullNameError] = useState('')
    const [fullNameIsValid, setFullNameValid] = useState(true)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailIsValid, setEmailValid] = useState(true)

    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('Phone is not valid')
    const [phoneIsValid, setPhoneValid] = useState(true)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordIsValid, setPasswordValid] = useState(true)

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [confirmPasswordIsValid, setConfirmPasswordValid] = useState(true)

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onFirebasePress = () => {
        firebase.database().ref('users/2').set({
            username: "fullName",
            email: "email",
            phone: "phone"
        })

    }

    const onRegisterPress = () => {
        setLoading(true);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                firebase.database().ref('users/' + response.user.uid).set({
                    username: fullName,
                    email: email,
                    phone: phone,
                    score: 0
                }).catch(error => {
                    alert(error)
                })
            })
            .catch((error) => {
                alert(error)
            });
    }

    const onChangeFullName = (fullName) => {
        setFullName(fullName)
        validateFullName(fullName)
    };

    const validateFullName = (fullName) => {
        const validationResult = validate({username: fullName}, usernameConstraints);
        if (typeof validationResult === 'undefined') {
            setFullNameValid(true)
        } else {
            setFullNameValid(false)
            setFullNameError(validationResult.username[0])
        }
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

    const onChangePhone = (phone) => {
        const code = phone.substring(0, 4);
        if(code === '+380') {
            if (phone.length < 13) {
                setPhoneValid(false);
                setPhone(phone);
            }
            if(phone.length === 13) {
                setPhone(phone);
                setPhoneValid(true)
            }
        } else {
            if (phone.length < 10) {
                setPhoneValid(false)
                setPhone(phone);
            }
            if(phone.length === 10) {
                setPhone(phone);
                setPhoneValid(true)
            }
        }

    };

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

    const onChangeConfirmPassword = (confirmPassword) => {
        setConfirmPassword(confirmPassword);
        validateConfirmPassword(confirmPassword)
    };

    const validateConfirmPassword = (confirmPassword) => {
        const validationResult = validate({
            password: password,
            confirmPassword: confirmPassword
        }, confirmPasswordConstraints);
        if (typeof validationResult === 'undefined') {
            setConfirmPasswordValid(true)
        } else {
            setConfirmPasswordValid(false)
            setConfirmPasswordError(validationResult.confirmPassword[0])
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
                    error={!fullNameIsValid}
                    label='Full Name'
                    mode="outlined"
                    onChangeText={(text) => onChangeFullName(text)}
                    value={fullName}
                    autoCapitalize="words"
                    autoCompleteType="name"
                />

                {fullNameIsValid ? null :
                    <HelperText
                        visible={!fullNameIsValid}
                        style={styles.errorMessage}
                        type="error"
                    >
                        {fullNameError}
                    </HelperText>}

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
                    error={!phoneIsValid}
                    label='Phone'
                    mode="outlined"
                    onChangeText={(text) => onChangePhone(text)}
                    value={phone}
                    autoCapitalize="none"
                    autoCompleteType="tel"
                    keyboardType="phone-pad"
                />
                {phoneIsValid ? null :
                    <HelperText
                        visible={!phoneIsValid}
                        style={styles.errorMessage}
                        type="error"
                    >
                        {phoneError}
                    </HelperText>
                }

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

                <TextInput
                    style={styles.input}
                    error={!confirmPasswordIsValid}
                    secureTextEntry
                    label='Confirm Password'
                    mode="outlined"
                    onChangeText={(text) => onChangeConfirmPassword(text)}
                    value={confirmPassword}
                    autoCapitalize="none"
                />
                {confirmPasswordIsValid ? null :
                    <HelperText
                        visible={!confirmPasswordIsValid}
                        style={styles.errorMessage}
                        type="error"
                    >
                        {confirmPasswordError}
                    </HelperText>
                }
                <View style={{alignItems: "center", justifyContent: 'center'}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress}
                                                                                  style={styles.footerLink}>Log
                        in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
            </LinearGradient>
        </View>
    )
}