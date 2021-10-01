import { Header, Icon, Segment, Grid } from 'semantic-ui-react'

const Error = ({ message }) => {
    return (
        <Grid.Row columns={1}>
            <Grid.Column>
                <Segment placeholder>
                    <Header icon>
                    <Icon name='help' />
                        { message }
                    </Header>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    );
}

export default Error;