import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import Power from '../components/Power/index'

const power = () => {
    return (
        <>
            <Header
                title="Poder - Paneles"
            />
            <TopMenu
                option="Poder"
            />
            <Power />
        </>
    );
}

export default power;