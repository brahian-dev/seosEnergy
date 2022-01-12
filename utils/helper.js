import { API, panelsOptions } from './dates'

import moment from 'moment'

export const dashboard = (sensor, company) => {
    const end = moment().format("YYYY-MM-DD")
    const start =  moment().subtract(7, 'd').format("YYYY-MM-DD")
    const url = `${ API[company].url }?sensorId=${ sensor }&start=${ start }&end=${ end }&granularity=${ API[company].granularity }`

    return url
}

export const getToken = async (company) => {
    let url = ''
    switch (company) {
        case 'neurio':
            url = `${ API[company].token.url }`
        break;
    }

    const token = await fetch(url,
        {
            method: 'POST',
            body: new URLSearchParams({
                'grant_type': API[company].token.grant_type,
                'client_id': API[company].token.client_id,
                'client_secret': API[company].token.client_secret
            })
        }
    );
    
    const data = await token.json()

    return `${ data.token_type } ${ data.access_token }`
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