import { StyleSheet } from 'react-native';
import { COLORS_DARK, COLORS_LIGHT } from '../../config/Colors';
import { lightMode } from '../../config/Constants';
import { SIZES } from '../../config/Sizes';

const COLORS = lightMode === 'light' ? COLORS_LIGHT : COLORS_DARK

export const signUpStyles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: SIZES.title,
        color: COLORS.text,
        paddingBottom: 20
    },
    textinput: {
        fontSize: SIZES.text,
        width: 200,
        height: 40,
        color: COLORS.text,
        paddingLeft: 20,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5
    },
    button: {
        textAlign: 'center',
        fontSize: SIZES.text_button,
        width: 300,
        paddingVertical: 10,
        backgroundColor: COLORS.touchables,
        borderRadius: 3
    },
    textRecover: {
        textAlign: 'center',
        fontSize: SIZES.text,
        paddingTop: 10,
        color: COLORS.text
    },
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 300,
        marginBottom: 10
    },
    containerInputDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200
    },
    picker: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        height: 40,
        paddingLeft: 10
    },
    containerChecked: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        width: 300,
        marginBottom: 20,
        marginTop: 10
    },
    pickerContainer: {
        borderColor: 'grey',
        width: 200
    }
})