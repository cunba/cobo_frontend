import { PermissionsAndroid } from "react-native";
import i18n from '../infrastructure/localization/i18n';

export const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
          title: i18n.t("location.permission.title"),
          message: i18n.t("location.permission.message"),
          buttonNeutral: i18n.t("location.permission.neutral"),
          buttonNegative: i18n.t("location.permission.reject"),
          buttonPositive: i18n.t("location.permission.accept")
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
    } else {
      console.log("Location permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

export const requestCameraPermission = async () => {
    try {
        
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: i18n.t("camera.permission.title"),
          message: i18n.t("camera.permission.message"),
          buttonNeutral: i18n.t("camera.permission.neutral"),
          buttonNegative: i18n.t("camera.permission.reject"),
          buttonPositive: i18n.t("camera.permission.accept")
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
};

export const requestWritingPermission = async () => {
    try {
        
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: i18n.t("writing.permission.title"),
          message: i18n.t("writing.permission.message"),
          buttonNeutral: i18n.t("writing.permission.neutral"),
          buttonNegative: i18n.t("writing.permission.reject"),
          buttonPositive: i18n.t("writing.permission.accept")
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can keep writing");
      } else {
        console.log("Writing permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
};