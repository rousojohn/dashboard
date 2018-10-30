import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dash from './components/Dash'
import Courses from './containers/courses'
import NotFound from './containers/notFound'
import AddCourses from './containers/addCourse'
import Header from './components/Header'
import '././app.css'


ReactDOM.render(
  <BrowserRouter>
  <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Dash}/>
      <Route path='/courses' component={Courses}/>
      <Route path='/courses/:course' component={Courses}/>
      <Route path='/add-course' component={AddCourses}/>
    </Switch>
  </>
  </BrowserRouter>,
  document.getElementById('app')
)
