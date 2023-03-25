import { observable, makeAutoObservable, action } from "mobx"

export class LoginViewModel {
    email?: string = ""
    password?: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    setEmail(email: string) {
        this.email = email
        return this.email
    }

    setPassword(password: string) {
        this.password = password
        return this.password
    }

    isPasswordValid() {
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

    isValid() {
        return this.isEmailValid() === true && this.isPasswordValid() === true
    }
}