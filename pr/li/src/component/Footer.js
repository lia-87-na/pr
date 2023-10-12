import React from 'react'
import Codeli from '../images/codeli.jpg'
import Logo from '../images/logo.jpg'
import Menu from './Menu'
import { BsTelephone, BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
export default function Footer() {
    return (
        <footer>
            <div className='section'>
                <div className='footer_content'>
                    <div className='footer_childe'>
                        <div className='logo' >
                            <a href='routMenu'>
                                <img alt='FullClean' src={Logo} />
                            </a>
                        </div>
                    </div>
                    <div className='footer_childe'>
                        <Menu />
                    </div>
                    <div className='footer_childe'>
                        <p> <BsTelephone /> +37498771255</p>
                        <p><AiOutlineMail /> fullclean@mail.ru</p>
                        <div className='icons'>
                            <a href='#' rel='noreferrer' target={'_blank'}>
                                <BsFacebook/>
                            </a>
                            <a href='#' rel='noreferrer' target={'_blank'}>
                                <BsInstagram/>
                            </a>
                            <a href='#' rel='noreferrer' target={'_blank'}>
                                <BsTelegram/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='code_li'>
                    <div className='compania'>
                        <a href='https://www.facebook.com/codeliit/' target={'_blank'} rel="noreferrer">
                            <img src={Codeli} alt='Codeli icon' />
                        </a>
                        <sub>@Code li education</sub>
                    </div>
                </div>
            </div>
        </footer>
    )
}
