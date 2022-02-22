import { API, panelsOptions } from './dates'

import moment from 'moment'

export const dashboard = (sensor, company) => {
    let url = ''
    switch (company) {
        case 'neurio':
            const end = moment().format("YYYY-MM-DD")
            const start =  moment().subtract(7, 'd').format("YYYY-MM-DD")
            url = `${ API[company].url }?sensorId=${ sensor }&start=${ start }&end=${ end }&granularity=${ API[company].granularity }`
        break;
        case 'growant':
            const endGrowant = moment().format("YYYY-MM-DD")
            const startGrowant =  moment().subtract(7, 'd').format("YYYY-MM-DD")
            url = `${ API[company].url }/plant/energy?plant_id=${ sensor }&start_date=${ startGrowant }&end_date=${ endGrowant }&time_unit=${ API[company].timeUnit }`
        break;
    }

    return url
}

export const getToken = async (company) => {
    let url = ''
    let token = ''
    let response = ''
    switch (company) {
        case 'neurio':
            url = `${ API[company].token.url }`

            token = await fetch(url,
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
            response = `${ data.token_type } ${ data.access_token }`
        break;
        case 'growant':
            url = `${ API[company].token }`

            response = url
        break;
    }

    return response
}

export const getDates = async (company, token, url) => {
    let response = ''
    switch (company) {
        case 'neurio':
            const res = await fetch(`${ url }`, {
                method: "GET",
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            const data = await res.json()

            response = data
        break;
        case 'growant': {
            const res = await fetch(`${ url }`, {
                method: "GET",
                headers: {
                    "token": token,
                    "Content-Type": "application/json"
                }
            })

            const data = await res.json()

            response = data
        }
    }

    return response
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