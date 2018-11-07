import React from 'react'
import { Loader, CourseDetails } from '../components'
import DataComponent from '../datacomponents/DataComponent'
import Config from '../conf.json'


const ViewCourse = ({match}) => (
    <DataComponent endpoint={`${Config.CoursesEndpoint}/${match.params.id}`}>
    {
        (data, isLoading) => {
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