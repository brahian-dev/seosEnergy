import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import Dashboard from '../components/Dashboard/index'

const Index = ({ data }) => {

  return (
    <>
      <Header
        title="Dashboard - Paneles"
      />
      <TopMenu
        option="Dashboard"
      />
      <Dashboard />
    </>
  );
}

export default Index