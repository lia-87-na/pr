import React from 'react'
import { more } from '../script/more'
export default function Info() {
  return (
    <div className='container-fluid info'>
      <div className='container'>
        <div className='info_content'>
          <h2>Lorem ipsum</h2>
          <p className='hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, incidunt itaque. Ducimus, tenetur consequuntur
            laudantium id aperiam voluptatibus consectetur atque autem. Possimus iste error tenetur est unde eaque magnam.
            Recusandae, nihil distinctio, rem a placeat vel, eius fugit fugiat voluptatem eligendi quasi voluptates
            reprehenderit facilis libero sit ex. Nihil dignissimos in a facere, sunt eum magnam, laboriosam minus, ipsa
            recusandae doloribus vero consequatur sint ullam tempora hic quo ipsum deserunt excepturi? Alias animi fuga numquam
            et, necessitatibus sint totam. Velit, nostrum harum! Ad repudiandae aut fuga sint doloremque, incidunt voluptatum
            eveniet saepe asperiores, suscipit pariatur! Autem tempore facilis iste delectus, ea laborum. Maxime cum,
            praesentium ut laborum eligendi distinctio sequi minus explicabo voluptates similique libero neque ea reprehenderit?
            Voluptas, vel?</p>
          <button onClick={more}>more info</button>
        </div>
      </div>
    </div>
  )
}
