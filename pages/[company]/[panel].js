import TopMenu from '../../components/TopMenu'
import Panels from '../../components/Company/Panels/index'
import { API, panelsOptions } from '../../utils/dates'
import { firstUpperCase, dashboard, getToken, getDates } from '../../utils/helper'

import { useRouter } from 'next/router'
import Head from 'next/head'

const Company = ({ data }) => {
    const router = useRouter()
    const { company, panel } = router.query

    return (
        <>
            <Head>
                <title> Dashboard - { company } </title>
            </Head>
            <TopMenu
                option="Dashboard"
                urlDashboard={ `/${ company }/${ panel }` }
                disabled={ false }
            />
            <Panels data={ data } company={ company } />
        </>
    )
}

export async function getServerSideProps(context) {
    const { company, panel } = context.query
    const panels = panelsOptions[company].panels
    const sensor = panels.find( item => item.nameRedirect ===  panel )
    const url = dashboard(sensor.key, company)
    const token = await getToken(company)
    const data = await getDates(company, token, url)

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

export default Company