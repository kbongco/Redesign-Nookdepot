import React from 'react';
import './ServicesAndExchange.css'

export default function ServicesAndExchange() {
  return (
    <>
      <div className='sidebar'>
        <h2>Various Services Provided</h2>
        <ul>
          <li>Watering Flowers</li>
          <li>Fishing</li>
          <li>Weeding</li>
          <li>DIY Crafting </li>
        </ul>
      </div>
      <div className='exchange'>
        <h2>In Exchange, Looking for</h2>
        <ul>
          <li>Bells</li>
          <li>Nook Miles Tickets</li>
          <li>DIY Materials</li>
          <ul>
            <li>Star Pieces</li>
            <li>Christmas Ornament</li>
            </ul>
        </ul>
      </div>
      </>
  )
}