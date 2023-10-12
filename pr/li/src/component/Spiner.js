import React from 'react'
 import spiner from '../images/loading/loading.gif'
export default function Spiner() {
  return (
    <div className='load'>
          <img src={spiner} alt={"load"}/>
    </div>
  )
}
