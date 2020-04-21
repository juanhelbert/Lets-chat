import React from 'react'

export const Message = ({ message: { user, text }, name }) => {
  let isSendByCurrentUser = false
  let isSendByAdminUserUser = false

  const trimedName = name.trim().toLowerCase()

  if (user === trimedName) {
    isSendByCurrentUser = true
  }

  if (user === 'admin') {
    isSendByAdminUserUser = true
  }

  return (
    isSendByCurrentUser ? (
      <div className='justifyEnd'>
        <p>{text}</p>
      </div>
    ) : isSendByAdminUserUser ? (
      <div className='justifyCenter'>
        <p>{text}</p>
      </div>
    ) : (
          <div className='justifyStart'>
            <p>{text}</p>
            <span >{user}</span>
          </div >
        )
  )
}

export default Message
