import { API, panelsOptions } from './dates'

import moment from 'moment'

export const dashboard = (sensor, company) => {
    const end = moment().format("YYYY-MM-DD")
    const start =  moment().subtract(7, 'd').format("YYYY-MM-DD")
    const url = `${ API[company].url }?sensorId=${ sensor }&start=${ start }&end=${ end }&granularity=${ API[company].granularity }`

    return url
}

export const getPanels = (company) => {
    const panel = panelsOptions[company].panels

    return panel
}

export const convertKwNetEnergy = (data) => {
    const kw = data / ( 1000 * 3600 )

    return kw
}

export const convertKwNetPower = (data) => {
    const kw = data / 1000

    return kw
}

export const firstUpperCase = (text) => {
    const string = text.charAt(0).toUpperCase() + text.slice(1)

    return string
}