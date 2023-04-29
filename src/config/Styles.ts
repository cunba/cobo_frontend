import { StyleSheet } from "react-native";
import { COLORS_DARK, COLORS_LIGHT } from "./Colors";
import { lightMode } from "./Constants";
import { SIZES } from "./Sizes";

const COLORS = lightMode === 'light' ? COLORS_LIGHT : COLORS_DARK

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        paddingTop: 10
    },
    spinner: {
        paddingBottom: 15,
        backgroundColor: 'white',
    },
    title: {
        textAlign: 'center',
        fontSize: SIZES.title,
        color: COLORS.text,
        width: '100%',
        marginTop: -10
    },
    titleToolbar: {
        textAlign: 'center',
        fontSize: 25,
        color: COLORS.textButtons
    },
    text: {
        textAlign: 'center',
        fontSize: SIZES.text,
        color: COLORS.text,
    },
    textButton: {
        textAlign: 'center',
        fontSize: SIZES.text_button,
        color: COLORS.textButtons,
    },
    textInOut: {
        textAlign: 'center',
        fontSize: SIZES.text,
        color: COLORS.text,
        paddingBottom: 5,
    },
    containerOptions: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 30,
    },
    containerInOut: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerRadioButtonIn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 'auto',
    },
    containerRadioButtonOut: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 'auto',
        marginRight: -7
    },
    labelContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        top: -7,
        left: 10,
        paddingHorizontal: 5,
        zIndex: 50
    }
})

export const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    title: {
        textAlign: 'center',
        fontSize: SIZES.title,
        color: COLORS.text,
        paddingBottom: 20
    },
    textinput: {
        fontSize: SIZES.text,
        width: 300,
        height: 40,
        color: COLORS.textInputText,
        paddingLeft: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: COLORS.textInputBackground
    },
    button: {
        textAlign: 'center',
        fontSize: SIZES.text_button,
        width: 300,
        paddingVertical: 10,
        backgroundColor: COLORS.touchables,
        borderRadius: 3,
        marginBottom: 10
    }
})