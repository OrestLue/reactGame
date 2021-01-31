import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    input: {
        height: 48,
        marginVertical: 10,
        marginHorizontal: 30,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    button: {
        backgroundColor: '#19181A',
        width: '50%',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    errorMessage: {
        marginLeft: 30,
    },
    backgroundGradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topText: {
        marginLeft: 30,
        marginTop: 50
    },
    textFlip: {
        fontSize: 55,
        fontWeight: '900',
    },
    textCard: {
        fontSize: 40,
        fontWeight: '200'
    },
})