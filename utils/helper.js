import { API } from './dates'

import moment from 'moment'

export const dashboard = (sensor) => {
    const date = moment().subtract(1, 'months').format("YYYY-MM-DD")
    const url = `${ API.url }?sensorId=${ sensor }&start=${ date }&end=${ date }&granularity=${ API.dashboard.granularity }`

    return url
}