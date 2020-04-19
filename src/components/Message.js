import React from 'react'

export const Message = ({ message: { user, text }, name }) => {
  let isSendByCurrentUser = false

  const trimedName = name.trim().toLowerCase()

  if (user === trimedName) {
    isSendByCurrentUser = true
  }

  return (
    isSendByCurrentUser ? (
      <div className='message-wrapper justifyEnd'>
        <span className='pr-10'>{trimedName}</span>
        <div className='message-box bg-blue'>
          <p>{text}</p>
        </div>
      </div>
    ) : (
        <div className='message-wrapper justifyStart'>
          <div className='message-box bg-alice'>
            <p>{text}</p>
          </div>
          <span className='pl=10'>{user}</span>
        </div>
      )
  )
}

export default Message
