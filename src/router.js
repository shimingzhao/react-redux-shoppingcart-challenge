import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/homepage'
import OrdersPage from './components/orderspage'


const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/orders' component={OrdersPage} />
  </Switch>
)
export default Router