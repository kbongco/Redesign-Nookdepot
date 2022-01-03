import React from 'react';
import styled from 'styled-components'

export default function NavBar() {
  const NavBar = styled.div`
  background-color:#A3A2CF;
  margin-top:auto;
  `

  const NavLinks = styled.ul`
  text-decoration:none;
  display:inline;
  font-size:20px;
  `
  return (
    <>
      <NavBar>
        <h1>NookDepot</h1>
        <nav>
          <NavLinks>
            <li>Home</li>
            <li>Directory</li>
            <li>Tools</li>
            <li>Services</li>
            <li>Garden</li>
            <li>DIY Materials</li>
          </NavLinks>
        </nav>
      </NavBar>
      </>
  )
}