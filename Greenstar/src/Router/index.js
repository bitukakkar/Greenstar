import React from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Home from '../Components/Home/Home'
export const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Redirect to='/' />
      </Switch>
    </>
  )
}
