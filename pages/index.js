import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import Content from '../components/index'
import Wave from '../components/Wave/index'

const Index = ({ data }) => {

  return (
    <>
      <Header
        title="Dashboard - Paneles"
      />
      <TopMenu
        option="Dashboard"
        disabled={ true }
      />
      <Content />
      <Wave />
    </>
  );
}

export default Index