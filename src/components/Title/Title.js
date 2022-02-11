// src/Title.js
import React from 'react'
import './Title.css'
import { NavLink } from 'react-router-dom'


function Title() {
  return (
    <div className="Header">
    <h1 className='Title'>SFPOPOS</h1>
    <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
    <div>
    <NavLink 
    className={({ isActive }) => isActive ? "nav-link-active nav" : "nav-link nav" } to="/">
      List
    </NavLink>
    <NavLink 
      className={({ isActive }) => isActive ? "nav-link-active nav" : "nav-link nav" } to="/about">
      About
    </NavLink>
    </div>
  </div>
  )
}

export default Title