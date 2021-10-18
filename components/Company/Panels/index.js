import VerticalBar from './verticalBar'
import GroupBar from './groupedBar'
import Line from './Line'

import { Grid, Container } from "semantic-ui-react";

const Index = () => {
    return (
        <Container>
            <Grid divided='vertically' stackable>
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
            </Grid>
        </Container>
    );
}

export default Index;