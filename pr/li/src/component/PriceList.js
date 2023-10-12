import React, { useState } from 'react'
import SeviceBlock from './SeviceBlock'
import { service } from '../script/script'
import Table from './Table'

export default function PriceList() {


  return (

    <div className='container priceList'>
      <div className='container-sm parent'>
        <div className='parent_content'>
          <div className='anim'>
            <h3>Ծառայություններ</h3>
          </div>
          <div className='tare'>
            <div className='tare_block'>
              {service.map((elem) => {
                return <SeviceBlock name={elem.name} png={elem.png} class={elem.id} />
              })}
            </div>
          </div>
        </div>
      </div>
      {/* {service.map((elem) => {
        return <Table name={elem.name} table={elem.table} id={elem.id} />
      })} */}
    </div>

  )
}
