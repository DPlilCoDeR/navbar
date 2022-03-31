import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-header'>header</div>
      <div className='nav-toggle'>toggle</div>
      <div className='links-container'>
        {links.map(link => {
          const {id, url, text} = link
          return <a className='links' key={id} href={url}>{text}</a>
        })}
      </div>
    </nav>
  )
}

export default Navbar