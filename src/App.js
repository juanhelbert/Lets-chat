import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'

import Join from './components/Join'
import Chat from './components/Chat'

export const App = () => (
  <Router>
    <Route path='/' exact component={Join} />
    <Route path='/chat' exact component={Chat} />
  </Router>
)

export default App