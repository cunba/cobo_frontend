// import { StyleSheet } from "react-native/types";
import { StyleSheet } from "react-native";
import { COLORS_DARK, COLORS_LIGHT } from "../../config/Colors";
import { lightMode } from "../../config/Constants";
import { SIZES } from "../../config/Sizes";

const COLORS = lightMode === 'light' ? COLORS_LIGHT : COLORS_DARK

export const loginStyles = StyleSheet.create({
    textRecover: {
        textAlign: 'center',
        fontSize: SIZES.text,
        paddingTop: 10,
        paddingBottom: 20,
        color: COLORS.text
    },
})