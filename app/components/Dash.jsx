import React from 'react'
import Header from './Header'
import BigText from './BigText'
import axios from 'axios'
import PanelBadge from './PanelBadge'
import GridPanel from './GridPanel'
import {ListGroup, ListGroupItem, Grid, Row, Col} from 'react-bootstrap'
import CourseModel from '../models/CourseModel'
import StatsModel from '../models/StatsModel'

const ListGroupCss = {
  '&::after': {
    clear: 'both',
    display: 'block',
    content: ''
  }
}

const ListGroupItemCss = {
  float: 'left'
}

class Dash extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stats: [],
      courses: []
    }
  }

async componentDidMount() {
  
  let _courses = await CourseModel.getAll()
  let _stats = await StatsModel.getAll()
  
  this.setState({courses: _courses, stats: _stats})
}

  render () {
    const _stats = this.state.stats;
    const _courses = this.state.courses;
    return (
      <div>
        <BigText header='Welcome to Code.Hub Dashboard!' text='Manage everything and have fun!' />
        <Grid>
          <Row>
        {
          _stats.map(stat => <Col md={3} key={stat.id} ><PanelBadge {...stat} /></Col>)
        }
        </Row>
        </Grid>
        <GridPanel title='Last 5 courses' data={_courses} />
      </div>
    )
  }
}

export default Dash
