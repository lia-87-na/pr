import React from 'react'
import Menu from './Menu'
import Logo from '../images/logo.jpg'
import { LuMenu } from 'react-icons/lu'
 import{icon} from '../script/event'
export default function Header() {
 
    return (
        <div className='header'>
            <div className='header_section'>
                <div className='logo' >
                    <a href='routMenu'>
                        <img alt='FullClean' src={Logo}/>
                    </a>
                </div>
                <div className='menu'>
                    <div className='icon_logo' onClick={icon}>
                       <LuMenu/>
                    </div>
                    <div className='header_menu'>
                        <Menu/>
                    </div>
                </div>
            </div>
        </div>
    )
}
