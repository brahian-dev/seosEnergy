import { useState } from 'react';
import Image from 'next/image'
import Logo from '../public/SeosLogo.jpeg'
import { Icon, Menu } from 'semantic-ui-react'

const TopMenu = ({ option, urlDashboard = '/', disabled }) => {

    // State to Menu
    const [ item, setItem ] = useState(option)

    // Handle Click
    const onHandleClick = (e, { name, redirect }) => {
        setItem(name)

        window.location.href = redirect
    }

    return (
        <>
            <Menu pointing secondary>
                {/* Logo in Size incorrect */}
                {/* <Menu.Item>
                    <Image alt="Logo" src={ Logo } />
                </Menu.Item> */}
                <Menu.Item
                    name="Dashboard"
                    redirect={ urlDashboard }
                    active={ item === 'Dashboard' }
                    onClick={ onHandleClick }
                    link
                >
                    <Icon name='dashboard' />
                    Dashboard
                </Menu.Item>
                <Menu.Item
                    name="Historial"
                    redirect={ `${urlDashboard}/history` }
                    active={ item === 'Historial' }
                    onClick={ onHandleClick }
                    link
                    disabled={ disabled ? true : false }
                >
                    <Icon name='history' />
                    Historial
                </Menu.Item>
                <Menu.Item
                    name="Energia"
                    redirect={ `${urlDashboard}/energy` }
                    active={ item === 'Energia' }
                    onClick={ onHandleClick }
                    link
                    disabled={ disabled ? true : false }
                >
                    <Icon name='sun' />
                    Energia
                </Menu.Item>
                <Menu.Item
                    name="Poder"
                    redirect={ `${urlDashboard}/power` }
                    active={ item === 'Poder' }
                    onClick={ onHandleClick }
                    link
                    disabled={ disabled ? true : false }
                >
                    <Icon name='power' />
                    Poder
                </Menu.Item>
            </Menu>
        </>
    );
}

export default TopMenu;