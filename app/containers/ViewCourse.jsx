import React from 'react'
import { Loader, CourseDetails } from '../components'
import DataComponent from '../datacomponents/DataComponent'
import Config from '../conf.json'


const ViewCourse = (props) => (
    <DataComponent endpoint={`${Config.CoursesEndpoint}/${props.match.params.id}`}>
    {
        (data, isLoading) => {
            return (
                isLoading
                ? <Loader />
                : <CourseDetails {...data} {...props}/>
            )
        }
    }
    </DataComponent>
)

export default ViewCourse