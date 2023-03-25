import * as React from 'react';
import { StackActions } from '@react-navigation/native';
import { ROUTES } from '../../config/Constants';


export const navigationRef : any = React.createRef();

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}

export function dispatch(action: any) {
  return navigationRef.current?.dispatch(action)
}

export function back() {
  navigationRef.current?.goBack()
}

export function removeLoginScreenFromStack() {
  return dispatch({
    ...StackActions.replace(ROUTES.HOME,  { screen: ROUTES.HOME }),
    source: ROUTES.LOGIN,
    target: { screen: ROUTES.HOME }
  })
}