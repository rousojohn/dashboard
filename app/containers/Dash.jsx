import React from 'react'
import { BigText, PanelBadge, GridPanel, Loader } from '../components'
import {Grid, Row, Col} from 'react-bootstrap'

import DataComponent from '../datacomponents/DataComponent'
import Config from '../conf.json'

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

const Dash = () => (
      <div>
        <BigText header='Welcome to Code.Hub Dashboard!' text='Manage everything and have fun!' />
        <DataComponent endpoint={Config.StatsEndpoint}>
        {
          (data, isLoading) => {
            return (
              isLoading
                ? <Loader />
                : <Grid>
                  <Row>
                    { data.map(stat => <Col md={3} key={stat.id}><PanelBadge {...stat}/></Col>)}
                  </Row>
                </Grid>
            )
          }
        }
        </DataComponent>
        <DataComponent endpoint={Config.CoursesEndpoint}>
        {
          (data, isLoading) => {
            return (
              isLoading
              ? <Loader />
              : <GridPanel title='Last 5 courses' data={data} />
            )
          }
        }
        </DataComponent>
        
      </div>
)

export default Dash
