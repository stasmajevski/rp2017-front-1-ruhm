import React from 'react'
import { render } from 'react-dom'
import { Route, Switch, BrowserRouter, browserHistory } from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'

import './app.scss'

render(
  <BrowserRouter history={browserHistory}>
    <div id='content-wrapper'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.querySelector('#main')
)
