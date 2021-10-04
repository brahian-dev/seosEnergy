import VerticalBar from './verticalBar'
import GroupBar from './groupedBar'
import Line from './Line'
import SelectedOptions from '../SelectedOptions'
import Error from '../Error'
import { countryOptions, panelOptions, API } from '../../utils/dates'
import { dashboard } from '../../utils/helper'

import { useState, useEffect } from 'react'
import { Container, Grid, Select } from "semantic-ui-react";
import axios from 'axios'


const Index = () => {

    // State
    const [ company, setCompany ] = useState('')
    const [ panel, setPanel ] = useState({})

    // Effect
    useEffect(() => {
        const getDates = async () => {
            if ( company != '' && Object.keys(panel).length != 0 ) {
                const dashboardInstance = axios.create({
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': API.token
                    }
                })
                const url = dashboard(panel.key)
                const response = await dashboardInstance.get(url)

                console.log('Response', response);
            }
        }

        getDates();
    }, [ company, panel ])

    // Handle Change
    const onHandleChangeCompany = (e, { options }) => {
        const [ content ] = options

        setCompany(content.text)
    }

    const onHandleChangePanel = (e, { options }) => {

        const [ content ] = options

        setPanel({
            key: content.key,
            text: content.text
        })
    }

    return (
        <Container>
            <Grid divided='vertically' stackable>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Select
                            placeholder='Selecciona la Compañia'
                            options={countryOptions}
                            onChange={ onHandleChangeCompany }
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Select
                            placeholder='Selecciona el Panel Solar'
                            options={panelOptions}
                            onChange={ onHandleChangePanel }
                        />
                    </Grid.Column>
                    <Grid.Column>
                        {
                            company && panel.key
                            ?
                                <SelectedOptions
                                    company={ company }
                                    panel={ panel.text }
                                />
                            :
                            null
                        }
                    </Grid.Column>
                </Grid.Row>
                {
                    company && panel.key
                    ?
                        <>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <VerticalBar />
                                </Grid.Column>
                                <Grid.Column>
                                    <GroupBar />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={1}>
                                <Grid.Column>
                                    <Line />
                                </Grid.Column>
                            </Grid.Row>
                        </>
                    :
                        <Error
                            message="Debes seleccionar la Compañia y el Panel"
                        />
                }
            </Grid>
        </Container>
    );
}

export default Index;