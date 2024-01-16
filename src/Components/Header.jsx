import React from 'react'
import { BiMoon} from 'react-icons/bi'
import '../styles/header.css'

export default function Header() {
  return (
    <div className='header'>
        <h3 className='header-title'>Where in the world</h3>
        <div className='color-mode'><BiMoon className='icon'/> Darkmode</div>
    </div>
  )
}
