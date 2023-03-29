/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import {
  NativeModules, Text, useColorScheme,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { COLORS_DARK, COLORS_LIGHT } from './config/Colors';
import { isiOS, lightMode, ROUTES } from './config/Constants';
import { SIZES } from './config/Sizes';
import { commonStyles } from './config/Styles';
import i18n from './infrastructure/localization/i18n';
import { navigationRef } from './infrastructure/navigation/RootNavigation';
import { LoginViewModel } from './viewmodels/LoginViewModel';
import { SignUpViewModel } from './viewmodels/SignUpViewModel';
import { LoginView } from './views/login/LoginView';
import { SignUpView } from './views/signup/SignUpView';

let locale: string = isiOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;
export const AuthContext = React.createContext<any>({});
const Stack = createNativeStackNavigator();
const COLORS = lightMode === 'light' ? COLORS_LIGHT : COLORS_DARK

const LoginScreen = () => <LoginView vm={new LoginViewModel()} />
const SignUpScreen = () => <SignUpView vm={new SignUpViewModel()} />

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [loading, setLoading] = useState<boolean>(true)

	const loadDataCallback = useCallback(async () => {
		setTimeout(() => { setLoading(false); }, 3000);
	}, []);

	const [state, dispatch] = React.useReducer(
		(prevState: any, action: any) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					};
				case 'SIGN_IN':
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
					};
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignout: true,
						userToken: null,
					};
				case 'SIGN_UP':
					return {
						...prevState,
						isSignout: true,
						userToken: null
					}
			}
		},
		{
			isLoading: true,
			isSignout: false,
			userToken: null,
		},
	);

	useEffect(() => {
		const bootstrapAsync = async () => {
			// const isLogged = await SessionStoreFactory.getSessionStore().isLoggedIn()
			// const recoverPassword = await SessionStoreFactory.getSessionStore().getRecoverPassword()

			// if (isLogged) {
			// 	const credentials = await SessionStoreFactory.getSessionStore().getCredentials()
			// 	let userToken = ''
			// 	if (credentials && credentials.password && credentials.email) {
			// 		const response: JwtResponse = await new LoginRepository().login(credentials.email!, credentials.password!)
			// 		userToken = response.token!
			// 	}
			// 	dispatch({ type: 'RESTORE_TOKEN', token: userToken });
			// }

			// if (recoverPassword) {
			// 	navigate(ROUTES.RECOVERY, null)
			// }
		}
		bootstrapAsync()
	}, []);

	const authContext = React.useMemo(
		() => ({
			signIn: async (email: string, password: string) => {
				// const response = await new LoginRepository().login(email, password)
				// SessionStoreFactory.getSessionStore().setToken(response.token!);
				// SessionStoreFactory.getSessionStore().setCredentials({ email: email, password: password } as ICredentials)
				// const user = await new UserRepository().getByEmail(email)
				// SessionStoreFactory.getSessionStore().setUser(user)
				// const disband = await new DisbandRepository().getByUserId(user!.id!)
				// SessionStoreFactory.getSessionStore().setDisband(disband![0])
				dispatch({ type: 'SIGN_IN', token: '' });
			},
			signOut: () => {
				// SessionStoreFactory.getSessionStore().setToken('');
				// SessionStoreFactory.getSessionStore().setCredentials(undefined)
				// SessionStoreFactory.getSessionStore().setUser(undefined);
				// SessionStoreFactory.getSessionStore().setDisband(undefined);
				dispatch({ type: 'SIGN_OUT' });
			},
			signUp: async (user: any) => {
				// await new UserRepository().save(user)
			}
		}),
		[],
	);


	useEffect(() => {
		loadDataCallback();
	}, [loadDataCallback]);

  return (
    <>
      {!loading ?
        <AuthContext.Provider value={authContext}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
              {/* {!state.userToken || state.userToken.length === 0 ? (
                <Stack.Screen
                  name={ROUTES.LOGIN}
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
              ) :
                <>
                  <Stack.Screen
                    name={ROUTES.HOME}
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                  />
                </>
              }
              <Stack.Screen
                name={ROUTES.SEND_EMAIL}
                component={SendEmailScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name={ROUTES.RECOVERY}
                component={RecoveryScreen}
                options={{ headerShown: false }}
              /> */}
              <Stack.Screen
                name={ROUTES.LOGIN}
                component={LoginScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
        :
        <View style={{ width: '100%', height: '100%' }}>
          <View style={{ flex: 4, alignItems: "center", justifyContent: "center", backgroundColor: COLORS.background }}>
            <Text style={{ color: COLORS.touchables, fontSize: 50, paddingTop: 50 }}>{i18n.t('appName').toUpperCase()}</Text>
            {/* <Title style={{ color: COLORS.touchables, fontSize: 50, paddingTop: 50 }}>{i18n.t('appName').toUpperCase()}</Title> */}
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 30, flexDirection: 'row', backgroundColor: COLORS.background }}>
            <Text style={[commonStyles.text, { color: COLORS.text, fontSize: SIZES.text_button, paddingRight: 10 }]}>{i18n.t('init')}</Text>
          </View>
        </View>
      }
    </>
  );
}

export default App;