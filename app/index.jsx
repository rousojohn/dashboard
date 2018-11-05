import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Dash, Courses, NotFound, AddCourse, ViewCourse } from './containers'
import { Header } from './components'
import '././app.css'


ReactDOM.render(
  <BrowserRouter>
  <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Dash}/>
      <Route exact path='/courses' component={Courses}/>
      <Route path='/courses/:id' component={ViewCourse}/>
      <Route path='/add-course' component={AddCourse}/>
    </Switch>
  </>
  </BrowserRouter>,
  document.getElementById('app')
)
