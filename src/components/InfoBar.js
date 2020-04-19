import React from 'react'

export const InfoBar = ({ room }) => {
  return (
    <div className='info-bar'>
      <div className='left-wrapper'>
        Icon
        <h3>{room}</h3>
      </div>
      <div className='right-wrapper'>
        <a href='/'>Leave the chat</a>
      </div>
    </div>
  )
}

export default InfoBar
