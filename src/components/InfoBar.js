import React from 'react'

export const InfoBar = ({ room }) => {
  return (
    <div className='wrapper info-bar'>
      <a href='/'>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"></path></svg>
      </a>
      <h3>{room}</h3>
    </div>
  )
}

export default InfoBar
