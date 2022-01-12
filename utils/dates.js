export const countryOptions = [
    { key: 'neurio', value: 'neurio', text: 'Neurio' }
]

export const panelsOptions = {
    neurio: {
        panels: [
            {
                name: 'Anapoima',
                key: '0x0000C47F510354BA',
                description: 'This text will always have a left margin to make sure it sits alongside your icon'
            }
        ]
    },
    growant: {
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
        // token: 'Bearer AIOO-2m1KRafZLQCbg2Qkh1kQ5AgsWozKyop6ymXaWFUWROESdmWIhUctZggMFnYefh5eQMU2Uo53YM34lgQlzlBJk0hRU_Dhz70M2y-ERgH0l8klAdnLz94dY6-NETwwTfP_gjVohVDqFhpZLupqGs7tTltHuQHf6wvw7YTA1ROc2UKI4j5O_iVWSYgDWn2ijjLTJDO5gt2ixPX4l9Zinf4niEMhvT8Ki7QS7bLuupWbRBkoTF_xrT_DVDmQLyUClsxnCpYsAYI',
        token: {
            url: 'https://api.neur.io/v1/oauth2/token',
            grant_type: 'client_credentials',
            client_id: 'NQbpC-z7TLCbw9aLKV5SAA',
            client_secret: 'UJ4zFkheRRWUpsIhRPrzhA'
        },
        granularity: 'days'
    }
}