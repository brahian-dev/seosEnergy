import VerticalBar from './verticalBar'
import GroupBar from './groupedBar'
import Line from './Line'
import SelectedOptions from '../SelectedOptions'
import Error from '../Error'
import Loading from '../Loading'
import { getPanels } from '../../utils/helper'

import { useState } from 'react'
import { Container, Button, Grid, Segment, Loader } from "semantic-ui-react";
import Panels from '../Panels'

const Index = () => {

    const [ company, setCompany ] = useState('')
    const [ panels, setPanels ] = useState([])
    const [ loading, setLoading ] = useState(false)

    const handleClick = (e) => {
        const value = e.target.value

        setLoading(true)

        setCompany(value)

        const panels = getPanels(value)

        setPanels(panels)

        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }

    return (
        <Container>
            <Grid centered columns={2}>
                <Grid.Column mobile={8} tablet={8} computer={4}>
                    <Button
                        size='massive'
                        inverted
                        color='green'
                        value='neurio'
                        onClick={ handleClick }
                    > Neurio </Button>
                    <Button
                        size='massive'
                        inverted
                        color='blue'
                        value='growant'
                        onClick={ handleClick }
                    > Growant </Button>
                    <Button
                        size='massive'
                        inverted
                        color='yellow'
                        value='other'
                        onClick={ handleClick }
                    > Company </Button>
                </Grid.Column>
            </Grid>
            <Grid centered columns={2}>
                <Grid.Column>
                    {
                        loading ?
                            <Loading />
                        :
                            panels.length > 0 ?
                                <Panels
                                    panels={ panels }
                                    company={ company }
                                />
                            :
                            null
                    }
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Index;