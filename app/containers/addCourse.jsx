
import React from 'react'
import { withModal, Loader } from '../components'
// import { Form, FormGroup, ControlLabel, FormControl, Checkbox, 
//          Button, Glyphicon, InputGroup, ButtonToolbar } from 'react-bootstrap'
import DataComponent from '../datacomponents/DataComponent'
import Config from '../conf.json'

import CourseForm from '../components/CourseForm'

const AddCourse = ({match, handleClose}) => (
    <DataComponent endpoint={`${Config.CoursesEndpoint}/${match.params.id ? match.params.id : ''}`}>
    {
        (data, isLoading) => {
            return (
                isLoading
                ? <Loader />
                : <CourseForm course={match.params.id ? data : undefined } isNew={match.params.id ? false : true} handleClose={handleClose} />
            )
        }
    }
    </DataComponent>
)


export default withModal({title: 'Add Course'})(AddCourse);