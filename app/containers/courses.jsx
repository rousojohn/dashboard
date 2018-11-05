import React from 'react'
// import CourseModel from '../models/CourseModel'
import { Glyphicon, Button, Panel, Image, Grid, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CourseCard, Loader } from '../components'

import DataComponent from '../datacomponents/DataComponent'
import Config from '../conf.json'


const Courses = () => (
    <DataComponent endpoint={Config.CoursesEndpoint}>
    {
        (data, isLoading) => (
            isLoading
            ? <Loader />
            : <div>
                <Grid>
                    <Row>
                        {
                            data.map(course => (
                                <CourseCard key={course.id} {...course} />
                            ))
                        }
                    </Row>
                </Grid>
            </div>
        )
    }
    </DataComponent>
)

export default Courses;
