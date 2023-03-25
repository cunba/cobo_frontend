import React, { useCallback, useEffect, useState } from "react";

export const [loading, setLoading] = useState<boolean>(true)

export const loadDataCallback = useCallback(async () => {
    setTimeout(() => { setLoading(false); }, 3000);
}, []);

export const [state, dispatch] = React.useReducer(
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

export const bootstrapAsync = async () => {
    // const isLogged = await SessionStoreFactory.getSessionStore().isLoggedIn()
    // const recoverPassword = await SessionStoreFactory.getSessionStore().getRecoverPassword()

    // if (isLogged) {
    //     const credentials = await SessionStoreFactory.getSessionStore().getCredentials()
    //     let userToken = ''
    //     if (credentials && credentials.password && credentials.email) {
    //         const response: JwtResponse = await new LoginRepository().login(credentials.email!, credentials.password!)
    //         userToken = response.token!
    //     }
    //     dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    // }

    // if (recoverPassword) {
    //     navigate(ROUTES.RECOVERY, null)
    // }
}

export const authContextFunction = () => ({
    signIn: async (email: string, password: string) => {
        // const response = await new LoginRepository().login(email, password)
        // SessionStoreFactory.getSessionStore().setToken(response.token!);
        // SessionStoreFactory.getSessionStore().setCredentials({ email: email, password: password } as ICredentials)
        // const user = await new UserRepository().getByEmail(email)
        // SessionStoreFactory.getSessionStore().setUser(user)
        // const disband = await new DisbandRepository().getByUserId(user!.id!)
        // SessionStoreFactory.getSessionStore().setDisband(disband![0])
        dispatch({ type: 'SIGN_IN', token: 'response.token' });
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
})