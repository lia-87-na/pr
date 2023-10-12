import React from 'react'
import { menu } from '../script/script'
let MenuContent = menu.map((elem) => {
  return <li>
    <a href={'/' + elem.id}>{elem.title}</a>
  </li>
})
export default function Menu() {
  return (
    <ul>
      {MenuContent}
    </ul>
  )
}
