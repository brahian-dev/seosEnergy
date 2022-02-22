import VerticalBar from './verticalBar'
import GroupBar from './groupedBar'
import Line from './Line'

import { Grid, Container } from "semantic-ui-react";

const Index = ({ data, company }) => {
    return (
        <Container>
            <Grid divided='vertically' stackable>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <VerticalBar data={data} company={ company } />
                    </Grid.Column>
                    <Grid.Column>
                        <GroupBar data={data} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Line data={data} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Index;