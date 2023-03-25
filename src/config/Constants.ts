import { Platform } from "react-native"

export enum ROUTES {
    LOGIN = 'Login',
    HOME = 'Home',
    SETTINGS = 'Settings',
    SIGN_UP = 'Sign up',
    SEND_EMAIL = 'Send email'
}

export const APP = 'Cobo'
export const isAndroid = Platform.OS === 'android'
export const isiOS = !isAndroid
export const lightMode = 'light'

export const PHOTO_ALBUM_NAME = APP
export const SHARED_PREFERENCES_PACKAGE_NAME = APP.toLowerCase() + "_preferences"
export const VERSION = "0.0.1"