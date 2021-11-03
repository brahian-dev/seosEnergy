import TopMenu from '../../../components/TopMenu'
import VerticalBar from '../../../components/Company/Panels/verticalBar'
import GroupBar from '../../../components/Company/Panels/groupedBar'
import Line from '../../../components/Company/Panels/Line'
import { API, panelsOptions } from '../../../utils/dates'
import { firstUpperCase, dashboard } from '../../../utils/helper'

import { useRouter } from 'next/router'
import Head from 'next/head'
import { Container, Grid } from "semantic-ui-react";

const Category = ({ data }) => {
    const router = useRouter()
    const { company, panel, category } = router.query

    const onRenderCategory = () => {
        switch (category) {
            case 'history':
                return <VerticalBar data={ data } />

            case 'energy':
                return <GroupBar data={ data }/>

            case 'power':
                return <Line data={ data }/>
        }
    }

    const onCheckOptionMenu = () => {
        switch (category) {
            case 'history':
                return 'Historial'

            case 'energy':
                return 'Energia'

            case 'power':
                return 'Poder'
        }
    }

    return (
        <>
            <Head>
                <title> {` ${ category } - ${ company } `} </title>
            </Head>
            <TopMenu
                option={ onCheckOptionMenu() }
                urlDashboard={ `/${ company }/${ panel }` }
                disabled={ false }
            />
            <Container>
                <Grid divided='vertically' stackable>
                    { onRenderCategory() }
                </Grid>
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const { company, panel } = context.query
    const panelUpper = firstUpperCase(panel)
    const panels = panelsOptions[company].panels
    const sensor = panels.find( panel => panel.name ===  panelUpper )
    const url = dashboard(sensor.key, company)

    const res = await fetch(`${ url }`, {
        method: "get",
        headers: {
        "Authorization": API[company].token,
        "Content-Type": "application/json"
        }
    })

    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data
        }
    }
}

export default Category;