import React from 'react'
import { Image, Grid, Row, Col, Glyphicon, ButtonToolbar, Button, Thumbnail, Panel } from 'react-bootstrap'
import { S_IFMT } from 'constants';

const onBackStyle = {
    zIndex: -1
};

const onTopStyle = {
    zIndex: 1
}

const panelStyle= {
    height: '70%',
    width: '100%',
    overflow: 'hidden'
};



const CourseDetails = ({id, title,imagePath,price,open,duration,dates, description}) => (
    <Grid>
        <Row>
            <Col md={12}>
                <h2>{title}&nbsp;<small>({id})</small></h2>
            </Col>
        </Row>
        <Row>
        <Col xs={8} md={12}>
                <Panel className='carousel'>
                    <Image src={imagePath} alt="242x200" responsive style={panelStyle}/>
                    <p className='col-md-6'>
                        <strong>Price:</strong>&nbsp;{price.normal}&nbsp;<Glyphicon glyph='glyphicon glyphicon-euro' /><br/>
                        <strong>Duration:</strong>&nbsp;{duration}
                    </p>
                    <p className='col-md-6'>
                        <strong>Bookable:</strong>&nbsp;{open ? <Glyphicon glyph='glyphicon glyphicon-ok' /> : '' }<br/>
                        <strong>Dates:</strong>&nbsp;{dates.start_date}&minus;{dates.end_date}
                    </p>
                    <p>
                    <div dangerouslySetInnerHTML={{__html: description}}></div>
                    <hr/>
                    <ButtonToolbar>
                        <Button bsStyle='primary'>Edit</Button> &nbsp;
                        <Button bsStyle='danger'>Delete</Button>
                    </ButtonToolbar>
                    </p>
                </Panel>
        </Col>
        </Row>
    </Grid>
)

export default CourseDetails