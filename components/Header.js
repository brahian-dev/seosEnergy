import Head from 'next/head'

const Header = ({ title }) => {
    return (
        <Head>
            <link rel="shortcut icon" href="/textIco.ico" />
            <title> { title } </title>
        </Head>
    );
}

export default Header;