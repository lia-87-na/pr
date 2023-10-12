import React from 'react'
import AboutUs from './AboutUs'
import Contact from './Contact'
import PriceList from './PriceList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'

import Table from './Table'
import Info from './Info'
import { service } from '../script/script'

export default function RoutMenu() {
    return (
        <BrowserRouter>
            <div className='container-fluid routMenu' id='routMenu'>
                <HomePage />
                <Routes>
                    <Route path='priceList' Component={PriceList} />
                    <Route path='contact' Component={Contact} />
                    <Route path='aboutUs' Component={AboutUs} />
                </Routes>
            </div>
            <hr style={{ width: "78%", margin: "auto" }} />

            {service.map((elem) => {
                return <Table name={elem.name} table={elem.table} id={elem.id} />
            })}


            <Info />


        </BrowserRouter>
    )
}
