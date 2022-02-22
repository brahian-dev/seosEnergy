export const countryOptions = [
    { key: 'neurio', value: 'neurio', text: 'Neurio' }
]

export const panelsOptions = {
    neurio: {
        panels: [
            {
                name: 'Anapoima',
                nameRedirect: 'anapoima',
                key: '0x0000C47F510354BA',
                description: 'This text will always have a left margin to make sure it sits alongside your icon'
            }
        ]
    },
    growant: {
        panels: [
            {
                name: 'Madre Monte',
                nameRedirect: 'madremonte',
                key: '710299',
                description: 'This text will always have a left margin to make sure it sits alongside your icon'
            }
        ]
    },
    emporia: {
        panels: [
            {
                name: 'Other',
                key: 'Other One',
                description: 'This text will always have a left margin to make sure it sits alongside your icon'
            },
            {
                name: 'Other',
                key: 'Other Two',
                description: 'This text will always have a left margin to make sure it sits alongside your icon'
            },
            {
                name: 'Other',
                key: 'Other Three',
                description: 'This text will always have a left margin to make sure it sits alongside your icon'
            }
        ]
    },
    other: {
        panels: [
            {
                name: 'Other',
                key: 'Other One',
                description: 'This text will always have a left margin to make sure it sits alongside your icon'
            },
            {
                name: 'Other',
                key: 'Other Two',
                description: 'This text will always have a left margin to make sure it sits alongside your icon'
            },
            {
                name: 'Other',
                key: 'Other Three',
                description: 'This text will always have a left margin to make sure it sits alongside your icon'
            }
        ]
    }
}

export const API = {
    neurio: {
        url: 'https://api.neur.io/v1/samples',
        token: {
            url: 'https://api.neur.io/v1/oauth2/token',
            grant_type: 'client_credentials',
            client_id: 'NQbpC-z7TLCbw9aLKV5SAA',
            client_secret: 'UJ4zFkheRRWUpsIhRPrzhA'
        },
        granularity: 'days'
    },
    growant: {
        url: 'http://server.growatt.com/v1',
        token: '17lo0y089568976v9hbsa8118lfummyc',
        timeUnit: 'day'
    }
}