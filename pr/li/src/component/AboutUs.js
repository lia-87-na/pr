import React from 'react'
import { BsTelephone, BsGlobe2 } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { FiMapPin } from 'react-icons/fi'
import { TfiTime } from 'react-icons/tfi'
 import aboutimg from '../images/abutUs/aboutimg.jpg'
 import qr from '../images/QR/qr.jpg'
export default function AboutUs() {
  return (
    <div className='container aboutUs'>
      <div className='aboutUs_content'>
        <div className='content_title'>
          <h1 className='display-6'>FullClean մաքրման ծառայություն</h1>
        </div>
        <div className='content1'>
          <img src={aboutimg} alt={"pictures"} style={{width:"100%",height:"100%"}}/>
        </div>
        <div className='content2'>
          <div className='icon_block'>
            <p className='mark'>   <BsTelephone /></p>
            <p><a style={{textDecoration:"none",color:"black"
          }} href={qr} target={"_blank"} rel={"noreferrer"}>+37498771255</a></p>
          </div>
          <div className='icon_block'>
            <p className='mark'>  <GoMail /></p>
            <p>fullclean@mail.ru</p>
          </div>
          <div className='icon_block'>
            <p className='mark'>  <FiMapPin /></p>
            <p>Պարույր Սևակ 11</p>
          </div>
          <div className='icon_block'>
            <p className='mark'>  <BsGlobe2 /></p>
            <p>fullclean.am</p>
          </div>
          <div className='icon_block'>
            <p className='mark'> <TfiTime /></p>
            <label  className='shedule '>
              <p>Երկ-Ուրբ   <span>09:00-22:00</span></p>
              <p>Շբթ   <span>09:00-18:00</span></p>
             
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
