import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Panel, Image, Button, Glyphicon } from 'react-bootstrap'

const navlinkStyle = {
    color: 'white'
}

const CourseCard = ({id, title,imagePath,price,open,duration,dates}) => {
    return (
        <Col key={id} md={4}>
            <Panel>
                <Panel.Heading>{title}</Panel.Heading>
                <Panel.Body>
                    <Image src={imagePath} responsive />
                    <div>
                        Price:&nbsp;<strong>{price.normal} <Glyphicon glyph='glyphicon glyphicon-euro' /></strong>
                        |
                        Bookable:&nbsp;<strong>{open ? <Glyphicon glyph='glyphicon glyphicon-ok' /> : '' } </strong>
                    </div>
                    <div>
                        Duration:&nbsp;<strong>{duration}</strong>
                    </div>
                    <div>
                        Dates:&nbsp;<strong>{dates.start_date}&minus;{dates.end_date}</strong>
                    </div>
                    <div>
                        <Button className='pull-right' bsStyle="primary">
                            <NavLink to={'/courses/'+id} style={navlinkStyle} >View</NavLink>
                        </Button>
                    </div>
                </Panel.Body>
            </Panel>
        </Col>
    )
}

export default CourseCard