import VerticalBar from './verticalBar'
import GroupBar from './groupedBar'
import Line from './Line'
import SelectedOptions from '../SelectedOptions'
import Error from '../Error'
import { countryOptions, panelOptions } from '../../utils/dates'

import { useState } from 'react'
import { Container, Grid, Select } from "semantic-ui-react";


const Index = () => {

    // State
    const [ company, setCompany ] = useState('')
    const [ panel, setPanel ] = useState({})

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