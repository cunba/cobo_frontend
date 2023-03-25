import Moment from 'moment';
import 'moment/locale/es';


export const dateFormat = (date: Date, format: string = 'YYYY-MM-DD') => {
    return Moment.utc(date.toUTCString()).format(format)
}

export const getDateParse = (date: Date) => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return year + '-' + month + '-' + day;
}

export const timeFormatter = (hour: number, minutes: number) => {
    return (hour < 10 ? `0${hour}` : `${hour}`) + ":" + (minutes < 10 ? `0${minutes}` : `${minutes}`)
}

export const timeDifferenceIn = (unit: "minutes" | "hours" | "days", from: string, to: string) => {
    Moment.locale("es")
    const moment1 = Moment(to, "HH:mm")
    const moment2 = Moment(from, "HH:mm")
    const difference = moment1.diff(moment2, unit ? unit : "minutes")
    return difference
}

export const timeDifferenceUnixDate = (unit: "minutes" | "hours" | "days", from: string, to: string) => {
    Moment.locale("es")
    const moment1 = Moment(to, 'x')
    const moment2 = Moment(from, 'x')
    const difference = moment1.diff(moment2, unit ? unit : "minutes", true)
    return difference
}

export const now = (format?: string) => {
    Moment.locale("es")
    return Moment.utc(new Date().toUTCString()).format(format ? format : "DD/MM/yyyy HH:mm:ss")
}

export const dateFormatter = (day: number, month: number, year: number) => {
    let date = new Date()
    date.setFullYear(year, month - 1, day)
    return Moment.utc(new Date().toUTCString()).format("DD/MM/yyyy");
}


export const parseDate = (year?: number, month?: number, day?: number, hour?: number, minutes?: number, seconds?: number) => {
    const date = new Date()
    if (year && month && day) {
        date.setFullYear(year, month - 1, day)
        if (hour) date.setHours(hour, minutes ? minutes : 0, seconds ? seconds : 0)
        return date?.toUTCString()
    }
    return undefined
}


export const dateFromString = (text: string): Date => {
    const date = new Date()
    date.setTime(Date.parse(text))
    return date
}

export const localTimeString = (date: Date): string => {
    return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0')
}