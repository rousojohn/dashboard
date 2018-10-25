import React from 'react'
import { Panel, Table, Glyphicon, Button} from 'react-bootstrap'

const GridPanel = (props) => {
    console.log(props)
    const _data = props.data
    return (
        <Panel bsStyle="primary">
            <Panel.Heading>
                <Panel.Title componentClass="h3">{props.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Bookable</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _data.map(row => {
                                return ( 
                                    <tr key={row.id}>
                                        <td><Glyphicon glyph='glyphicon glyphicon-info-sign' /></td>
                                        <td>{row.title}</td>
                                        <td>{row.open ? <Glyphicon glyph='glyphicon glyphicon-ok' /> : ''}</td>
                                        <td>{row.price.normal}</td>
                                        <td>{row.dates.start_date} - {row.dates.end_date}</td>
                                        <td><Button bsStyle="info" bsSize="xsmall">View details</Button></td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
            </Panel.Body>
        </Panel>
    )
}

export default GridPanel