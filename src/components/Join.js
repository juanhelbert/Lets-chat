import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className='join-wrapper'>
      <h1>Join</h1>
      <div>
        <input
          placeholder='Name'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder='Room'
          type='text'
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <Link to={`/chat?name=${name}&room=${room}`}>
        <button disabled={!name || !room} className='btn' type='submit'>
          Sign In
        </button>
      </Link>
    </div>
  )
}

export default Join
