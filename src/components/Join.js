import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className='page join container'>
      <h1>Join</h1>
      <input
        placeholder='Your name'
        type='text'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder='A room name'
        type='text'
        onChange={(e) => setRoom(e.target.value)}
      />
      <Link to={`/chat?name=${name}&room=${room}`} className={`btn ${!name || !room ? 'disabled' : 'enabled'}`} role='button' >
        Sign In
      </Link>
      <p>
        *You can enter into the same room but with a different name to try a conversation.
      </p>
    </div>
  )
}

export default Join
