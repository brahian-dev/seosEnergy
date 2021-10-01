import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import Dashboard from '../components/Dashboard/index'

const index = () => {
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

export default index;
