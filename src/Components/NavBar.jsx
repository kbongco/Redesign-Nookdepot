import React from 'react';
import styled from 'styled-components'
import './NavBar.css'

export default function NavBar() {
  const navContainer = {
  backgroundColor:'#A3A2CF',
  marginTop:'auto',
}


  return (
    <>
      <div className='navbar-container' style={navContainer}>
        <h1 style={{ marginTop: 'auto', textAlign:'left' }}>NookDepot</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Directory</li>
            <li>Tools</li>
            <li>Services</li>
            <li>Garden</li>
            <li>DIY Materials</li>
          </ul>
        </nav>
      </div>
      </>
  )
}