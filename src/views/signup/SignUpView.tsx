import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, View } from 'react-native';
import { AuthContext } from "../../App";
import { ROUTES } from "../../config/Constants";
import i18n from "../../infrastructure/localization/i18n";
import { back, navigate } from "../../infrastructure/navigation/RootNavigation";
import { FunctionalView } from "../../infrastructure/views/FunctionalView";
import { SignUpViewModel } from "../../viewmodels/SignUpViewModel";

export const SignUpView: FunctionalView<SignUpViewModel> = ({ vm }) => {
    const [showSpinner, setShowSpinner] = useState(false)
    const [hideErrorMessage, setHideErrorMessage] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [day, setDay] = useState('01')
    const [month, setMonth] = useState('01')
    const [year, setYear] = useState('2022')

    const { signUp } = React.useContext(AuthContext)

    useEffect(() => {
        vm.constructorFunctions()
    }, [])

    const doSignUp = async () => {
        const yearNumber = parseInt(year)
        const monthNumber = parseInt(month)
        const dayNumber = parseInt(day)

        if (vm.isValid()) {
            setHideErrorMessage(true)
            if (yearNumber <= new Date().getFullYear() && monthNumber <= 12 && dayNumber <= 31) {
                if (vm.password === vm.repeatPassword) {
                    if (vm.passwordLength()) {
                        setShowSpinner(true)
                        try {
                            vm.setUser()
                            await signUp('');
                            setShowSpinner(false);
                            Alert.alert(i18n.t('sign_up.success'))
                            navigate(ROUTES.LOGIN, null)
                        } catch (w: any) {
                            setErrorMessage(i18n.t('sign_up.error.udefined')!);
                        }
                        setHideErrorMessage(false);
                        setShowSpinner(false)
                    } else {
                        setErrorMessage(i18n.t('sign_up.error.password_length')!);
                        setHideErrorMessage(false);
                    }
                } else {
                    setErrorMessage(i18n.t('sign_up.error.password')!);
                    setHideErrorMessage(false);
                }
            } else {
                setErrorMessage(i18n.t('sign_up.error.birthday')!);
                setHideErrorMessage(false);
            }
        }
        else {
            setErrorMessage(i18n.t('sign_up.error.fields')!);
            setHideErrorMessage(false);
        }

    }

    const iconLeftProps: any = {
        onPress: () => back(),
        name: 'left',
        type: 'AntDesign'
    }

    return (
        <>
            {/* <Toolbar
                isIconLeft={true}
                iconLeft={iconLeftProps}
                color={COLORS.button}
                isIconRight={false}
            />
            <View style={commonStyles.container}>
                <Text style={signUpStyles.title}>{i18n.t('sign_up.title')}</Text>
                <View style={signUpStyles.containerInput}>
                    <Text style={commonStyles.text}>{i18n.t('sign_up.name.label')}:</Text>
                    <TextInput
                        value={vm.name}
                        autoCompleteType="off"
                        autoCorrect={false}
                        placeholder={i18n.t('sign_up.name.label')}
                        placeholderTextColor="grey"
                        onChangeText={(name: any) => vm.setName(name)}
                        style={signUpStyles.textinput}
                    />
                </View>
                <View style={signUpStyles.containerInput}>
                    <Text style={commonStyles.text}>{i18n.t('sign_up.surname.label')}:</Text>
                    <TextInput
                        value={vm.surname}
                        autoCompleteType="off"
                        autoCorrect={false}
                        placeholder={i18n.t('sign_up.surname.label')}
                        placeholderTextColor="grey"
                        onChangeText={(surname: any) => vm.setSurname(surname)}
                        style={signUpStyles.textinput}
                    />
                </View>
                <View style={signUpStyles.containerInput}>
                    <Text style={commonStyles.text}>{i18n.t('sign_up.email.label')}:</Text>
                    <TextInput
                        value={vm.email}
                        autoCompleteType="off"
                        autoCorrect={false}
                        placeholder={i18n.t('sign_up.email.label')}
                        placeholderTextColor="grey"
                        onChangeText={(email: any) => vm.setEmail(email)}
                        style={signUpStyles.textinput}
                    />
                </View>
                <View style={signUpStyles.containerInput}>
                    <Text style={commonStyles.text}>{i18n.t('sign_up.password.label')}:</Text>
                    <TextInput
                        value={vm.password}
                        autoCompleteType="off"
                        autoCorrect={false}
                        placeholder={i18n.t('sign_up.password.label')}
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        onChangeText={(password: any) => vm.setPassword(password)}
                        style={signUpStyles.textinput}
                    />
                </View>
                <View style={signUpStyles.containerInput}>
                    <Text style={commonStyles.text}>{i18n.t('sign_up.repeat_password.label')}:</Text>
                    <TextInput
                        value={vm.repeatPassword}
                        autoCompleteType="off"
                        autoCorrect={false}
                        placeholder={i18n.t('sign_up.repeat_password.placeholder')}
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        onChangeText={(password: any) => vm.setRepeatPassword(password)}
                        style={signUpStyles.textinput}
                    />
                </View>
                <View style={signUpStyles.containerInput}>
                    <Text style={commonStyles.text}>{i18n.t('sign_up.birthday.label')}:</Text>
                    <View style={signUpStyles.containerInputDate}>
                        <TextInput
                            value={day}
                            dataDetectorTypes={'calendarEvent'}
                            autoCompleteType="off"
                            autoCorrect={false}
                            placeholder={i18n.t('sign_up.day.label')}
                            placeholderTextColor="grey"
                            onChangeText={(day: any) => setDay(day)}
                            style={[signUpStyles.textinput, { paddingLeft: 5, textAlign: 'center', width: 50 }]}
                            keyboardType="numeric"
                        />
                        <Text style={[commonStyles.title, { paddingTop: 20 }]}>/</Text>
                        <TextInput
                            value={month}
                            dataDetectorTypes={'calendarEvent'}
                            autoCompleteType="off"
                            autoCorrect={false}
                            placeholder={i18n.t('sign_up.month.label')}
                            placeholderTextColor="grey"
                            onChangeText={(month: any) => setMonth(month)}
                            style={[signUpStyles.textinput, { paddingLeft: 5, textAlign: 'center', width: 50 }]}
                            keyboardType="numeric"
                        />
                        <Text style={[commonStyles.title, { paddingTop: 20 }]}>/</Text>
                        <TextInput
                            value={year}
                            dataDetectorTypes={'calendarEvent'}
                            autoCompleteType="off"
                            autoCorrect={false}
                            placeholder={i18n.t('sign_up.year.label')}
                            placeholderTextColor="grey"
                            onChangeText={(year: any) => setYear(year)}
                            style={[signUpStyles.textinput, { paddingLeft: 5, textAlign: 'center', width: 50 }]}
                            keyboardType="numeric"
                        />
                        <Text ></Text>
                    </View>
                </View>
                <View style={signUpStyles.containerInput}>
                    <Text style={commonStyles.text}>{i18n.t('sign_up.studies.label')}:</Text>
                    <DropDownPicker
                        key={'studiesPicker'}
                        open={openStudiesPicker}
                        setOpen={setOpenStudiesPicker}
                        value={studyId}
                        setValue={setStudyId}
                        multiple={false}
                        items={studies}
                        listMode={'MODAL'}
                        placeholder={i18n.t('sign_up.studies.placeholder')}
                        loading={loadingStudies}
                        style={signUpStyles.picker}
                        placeholderStyle={{ color: 'grey' }}
                        dropDownContainerStyle={signUpStyles.pickerContainer}
                        containerStyle={{ width: 200 }}
                        onOpen={onOpenStudies}
                        zIndex={2000}
                        zIndexInverse={1000}
                        categorySelectable={false}
                        listParentContainerStyle={{ borderBottomWidth: 1, borderTopWidth: 1.5 }}
                    />
                </View>
                <View style={signUpStyles.containerChecked}>
                    <BouncyCheckbox
                        isChecked={vm.isDisorder ? true : false}
                        onPress={() => vm.setIsDisorder(!vm.isDisorder!)}
                        fillColor={COLORS.touchables}
                        unfillColor={COLORS.background}
                        text={i18n.t('sign_up.check.label')}
                        textStyle={[commonStyles.text, { textDecorationLine: 'none' }]}
                        size={20}
                    />
                </View>

                {vm.isDisorder ?
                    <View style={signUpStyles.containerInput}>
                        <Text style={commonStyles.text}>{i18n.t('sign_up.disorder.label')}:</Text>
                        <DropDownPicker
                            key={'disorderPicker'}
                            open={openDisordersPicker}
                            setOpen={setOpenDisordersPicker}
                            value={disorderId}
                            setValue={setDisorderId}
                            multiple={false}
                            items={disorders}
                            setItems={setDisorders}
                            listMode={'SCROLLVIEW'}
                            placeholder={i18n.t('sign_up.disorder.placeholder')}
                            loading={loadingDisorders}
                            style={signUpStyles.picker}
                            containerStyle={{ width: 200 }}
                            placeholderStyle={{ color: 'grey' }}
                            dropDownContainerStyle={signUpStyles.pickerContainer}
                            dropDownDirection={'TOP'}
                            onOpen={onOpenDisordersPicker}
                            zIndex={1000}
                            zIndexInverse={2000}
                        />
                    </View>
                    :
                    <></>
                }

                {!hideErrorMessage ? (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ marginBottom: 5, color: 'red' }}>
                            {errorMessage}
                        </Text>
                    </View>
                ) : null}

                {showSpinner ?
                    <ActivityIndicator style={commonStyles.spinner} size='large' animating={true} color={COLORS.button} />
                    :
                    <TouchableOpacity style={signUpStyles.button} onPress={doSignUp} >
                        <Text style={commonStyles.textButton}>{i18n.t('sign_up.title')}</Text>
                    </TouchableOpacity>
                }
            </View> */}
        </>
    )
}