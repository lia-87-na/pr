import React from 'react'


export default function SeviceBlock(props) {
  return (
    <div className={'service ' + props.class} onClick={() => {
      let serv = document.getElementById(props.class)
      console.log(serv);
      if (serv.style.display = 'none' && serv.style.display == '') {
        serv.style.display = 'block'
       
      } else {
        serv.style.display = 'none'
      }
    }}>
      <div className='service_block' style={{ backgroundImage: `url(${props.png})`, }} ></div>
      <p>{props.name}</p>
    </div>
  )
}
