import React from 'react'
import { Loader, CourseDetails } from '../components'
import DataComponent from '../datacomponents/DataComponent'
import Config from '../conf.json'


const ViewCourse = ({match}, props) => (
    <DataComponent endpoint={`${Config.CoursesEndpoint}/${match.params.id}`}>
    {
        (data, isLoading) => {
            console.log(props)
            return (
                isLoading
                ? <Loader />
                : <CourseDetails {...data} />
            )
        }
    }
    </DataComponent>
)

export default ViewCourse