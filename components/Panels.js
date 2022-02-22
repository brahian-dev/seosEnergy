import { Icon, List, Segment } from 'semantic-ui-react'
import Link from 'next/link'

const Panels = ({ panels, company }) => {
    return (
        <Segment placeholder>
            <List>
                {
                    panels.map((item) => (
                        <Link key={ item.key } href={ `/${ company }/${ item.nameRedirect.toLowerCase() }` } passHref>
                            <List.Item as='a'>
                                <Icon name='battery full' />
                                <List.Content>
                                    <List.Header>{ item.name }</List.Header>
                                    <List.Description>
                                        { item.description }
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        </Link>
                    ))
                }
            </List>
        </Segment>
    );
}

export default Panels;