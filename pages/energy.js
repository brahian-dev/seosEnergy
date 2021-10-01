import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import Energy from '../components/Energy/index'

const energy = () => {
    return (
        <>
            <Header
                title="Energia - Paneles"
            />
            <TopMenu
                option="Energia"
            />
            <Energy />
        </>
    );
}

export default energy;