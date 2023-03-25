import { observable, makeAutoObservable, action } from "mobx"

export class SignUpViewModel {

    email?: string
    password?: string
    name?: string
    surname?: string
    birthday?: Date = new Date()
    repeatPassword?: string
    // @observable user?: UserDTO

    constructor() {
        makeAutoObservable(this)
        this.constructorFunctions()
    }

    constructorFunctions() {
    }

    setEmail(email: string) {
        this.email = email
        return this.email
    }

    setPassword(password: string) {
        this.password = password
        return this.password
    }

    setName(name: string) {
        this.name = name
        return this.name
    }

    setSurname(surname: string) {
        this.surname = surname
        return this.surname
    }

    setBirthday(birthday: Date) {
        this.birthday = birthday
        return this.birthday
    }

    setRepeatPassword(repeatPassword: string) {
        this.repeatPassword = repeatPassword
        return this.repeatPassword
    }

    setUser() {
        // const user: UserDTO = {
        //     name: this.name!,
        //     surname: this.surname!,
        //     birthday: dateFormat(this.birthday!, "dd-MM-yyyy"),
        //     email: this.email!,
        //     password: this.password!,
        //     role: "USER"
        // }

        // this.user = user
    }

    isPasswordValid() {
        if (this.password) {
            return this.password.trim().length > 0
        }
        else { return false }
    }

    isRepeatPasswordValid() {
        if (this.password) {
            return this.password.trim().length > 0
        }
        else { return false }
    }

    isEmailValid() {
        if (this.email) {
            return this.email.trim().length > 0
        }
        else { return false }
    }

    isNameValid() {
        if (this.name) {
            return this.name.trim().length > 0
        }
        else { return false }
    }

    isSurnameValid() {
        if (this.surname) {
            return this.surname.trim().length > 0
        }
        else { return false }
    }

    isValid() {

        return (
            this.isEmailValid() === true
            &&
            this.isPasswordValid() === true
            &&
            this.isNameValid() === true
            &&
            this.isSurnameValid() === true
            &&
            this.isRepeatPasswordValid() === true
        )
    }

    passwordLength() {
        if (this.password) {
            return this.password.trim().length > 6
        }
        else { return false }
    }
}