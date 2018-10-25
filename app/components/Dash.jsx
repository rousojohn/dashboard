import React from 'react'
import Header from './Header'
import BigText from './BigText'
import axios from 'axios'
import PaneBadge from './PanelBadge'
import GridPanel from './GridPanel'
import {ListGroup, ListGroupItem, Grid, Row, Col} from 'react-bootstrap'

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

componentDidMount() {
  axios.get('http://localhost:3000/stats').then(_stats => {
    this.setState({stats: _stats.data})
  })

  axios.get('http://localhost:3000/courses').then(_courses => {
    this.setState({courses: _courses.data})
  })
}

  render () {
    const _stats = this.state.stats;
    const _courses = this.state.courses;
    console.log('========> ', _courses)
    return (
      <div>
        <Header />
        <BigText header='Welcome to Code.Hub Dashboard!' text='Manage everything and have fun!' />
        <Grid>
          <Row>
        {
          _stats.map(stat => <Col md={3} key={stat.id} ><PaneBadge {...stat} /></Col>)
        }
        </Row>
        </Grid>
        <GridPanel title='Last 5 courses' data={_courses} />
      </div>
    )
  }
}

export default Dash
