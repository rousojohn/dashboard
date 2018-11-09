import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Image, Grid, Row, Col, Glyphicon, ButtonToolbar, Button, Well } from 'react-bootstrap'
import '../app.css'

const CourseDetails = ({id, title,imagePath,price,open,duration,dates, description}) => (
    
    <Grid>
        <Row>
            <Col md={12}>
                <h2>{title}&nbsp;<small>({id})</small></h2>
            </Col>
        </Row>
        <Row >
            <Col md={12}>
                <Image src={imagePath} responsive rounded/> 
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <p><strong>Price:</strong>&nbsp;{price.normal}&nbsp; <Glyphicon glyph='glyphicon glyphicon-euro' /></p>
            </Col>
            <Col md={6}>
                <p><strong>Duration:</strong>&nbsp;{duration}</p>
            </Col>
            <Col md={6}>
                <p><strong>Bookable:</strong>&nbsp;{open ? <Glyphicon glyph='glyphicon glyphicon-ok' /> : '' }</p>
            </Col>
            <Col md={6}>
                <p><strong>Dates:</strong>&nbsp;{dates.start_date}&minus;{dates.end_date}</p>
            </Col>
        </Row>
        <Row>
            <Col md={12} dangerouslySetInnerHTML={{__html: description}}>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <NavLink to={`/edit-course/${id}`}>
                    <Button bsStyle='primary'>
                        Edit
                    </Button>
                </NavLink> &nbsp;
                <NavLink to={`/edit-course/${id}`}>
                    <Button bsStyle='danger'>
                        Delete
                    </Button>
                </NavLink>
                <hr/>
                {/* <ButtonToolbar>

                    <Button bsStyle='primary'>
                        <div role='presentation'>
                            
                        </div>
                    </Button>
                    <Button bsStyle='danger'>Delete</Button>
                </ButtonToolbar> */}
            </Col>
        </Row>
        
    </Grid>
)

export default CourseDetails