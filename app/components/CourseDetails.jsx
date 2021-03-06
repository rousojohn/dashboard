import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col, Glyphicon, Button, Jumbotron } from 'react-bootstrap'
import { Delete } from '../datacomponents/SaveData'
import '../app.css'
import Config from '../conf.json'

const applyJumboImageStyle = (imagePath) => ({
    backgroundImage: `url(${imagePath})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    minHeight: 100,
    height: 400
});

const CourseDetails = ({id, title,imagePath,price,open,duration,dates, description, history}) => (
    
    <Grid>
        <Row>
            <Col md={12}>
                <h2>{title}&nbsp;<small>({id})</small></h2>
            </Col>
            <Col md={6}>
                <p><strong>Price:</strong>&nbsp;{price.normal}&nbsp; <Glyphicon glyph='glyphicon glyphicon-euro' /></p>
            </Col>
            <Col md={6}>
                <p><strong>Duration:</strong>&nbsp;{duration}</p>
            </Col>
            <Col md={6}>
                <p><strong>Bookable:</strong>&nbsp;{open ? <Glyphicon glyph='glyphicon glyphicon-ok' /> : <Glyphicon glyph='glyphicon glyphicon-remove' />  }</p>
            </Col>
            <Col md={6}>
                <p><strong>Dates:</strong>&nbsp;{dates.start_date}&minus;{dates.end_date}</p>
            </Col>
        </Row>
        <Row >
            <Col md={12}>
                {/* <Image src={imagePath} responsive rounded className='img-fluid'/>  */}
                <Jumbotron style={applyJumboImageStyle(imagePath)} ></Jumbotron>
            </Col>
            <Col md={12} dangerouslySetInnerHTML={{__html: description}}>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <NavLink to={`/edit-course/${id}`}>
                    <Button bsStyle='primary'>Edit</Button>
                </NavLink>
                &nbsp;
                <NavLink to='/courses' onClick={(e) => deleteClick(e, id, history)}>
                    <Button bsStyle='danger'>Delete</Button>
                </NavLink>
                <hr/>
            </Col>
        </Row>
        
    </Grid>
)

const deleteClick = async (e, id, history) => {
    e.preventDefault();
    try {
        await Delete(Config.CoursesEndpoint, id)
        history.go(-1)
    }
    catch (e) {
        alert('Ooops something went wrong')
        return
    }

}

export default CourseDetails