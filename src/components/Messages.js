import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import Message from './Message'

export const Messages = ({ messages, name }) => (
  <ScrollToBottom>
    {messages.map((message, idx) =>
      <div className='message-wrapper' key={idx}>
        <Message
          message={message}
          name={name}
        />
      </div>
    )}
  </ScrollToBottom>
)

export default Messages
