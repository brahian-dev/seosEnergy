import { Segment, Dimmer, Loader, Icon } from 'semantic-ui-react'

const Loading = () => {
    return (
        <Segment placeholder>
            <Dimmer active inverted>
                <Loader indeterminate>
                    Cargando Paneles <Icon name='sun' size='large' color='yellow' />
                </Loader>
            </Dimmer>
        </Segment>
    );
}

export default Loading;