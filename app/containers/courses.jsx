import React from 'react'
import CourseModel from '../models/CourseModel'
import { Glyphicon, Button, Panel, Image, Grid, Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CourseCard from '../components/CourseCard'

class Courses extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }
    }

    componentDidMount = async () => {
        let _courses = await CourseModel.getAll()
        this.setState({courses: _courses})
    }

    render = () => {
        const _courses = this.state.courses

        return (
            <div>
                <Grid>
                    <Row>
                        {
                            _courses.map(course => (
                                <CourseCard key={course.id} {...course} />
                            ))
                        }
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Courses;
