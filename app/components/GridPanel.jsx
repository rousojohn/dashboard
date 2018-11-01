import React from 'react'
import { Panel, Table, Glyphicon, Button} from 'react-bootstrap'
import { NavLink, Link} from 'react-router-dom'

import TableHeaders from './TableHeaders'
import TableBody from './TableBody'



const GridPanel = (props) => {
    const _data = props.data
    const _headers = ['#', 'Title', 'Bookable', 'Price', 'Date', 'Actions']
    return (
        <Panel bsStyle="primary">
            <Panel.Heading>
                <Panel.Title componentClass="h3">{props.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <Table striped bordered condensed hover>
                    <TableHeaders cols={_headers} />
                    <TableBody _data={_data} link='courses' />
                </Table>
            </Panel.Body>
        </Panel>
    )
}

export default GridPanel