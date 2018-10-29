import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dash from './components/Dash'
import Courses from './containers/courses'
import NotFound from './containers/notFound'
import AddCourses from './containers/addCourse'
import '././app.css'


ReactDOM.render(
  <BrowserRouter>
  <div>
    <Switch>
      <Route exact path="/" component={Dash}/>
      <Route path='/courses' component={Courses}/>
      <Route path='/courses/:course' component={Courses}/>
      <Route path='/add-course' component={AddCourses}/>
      <Route component={NotFound}/>
    </Switch>
  </div>
  </BrowserRouter>,
  document.getElementById('app')
)
