import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import History from '../components/History'

const history = () => {
    return (
        <>
            <Header
                title="Historial - Paneles"
            />
            <TopMenu
                option="Historial"
            />
            <History />
        </>
    );
}

export default history;