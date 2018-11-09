import React from 'react'
import { Glyphicon, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const navlinkStyle = {
    color: 'white'
}


const GridPanelItem = ({id, title, open, price, dates, link}) => {
    return (
        <tr>
            <td><Glyphicon glyph='glyphicon glyphicon-info-sign' /></td>
            <td>{title}</td>
            <td>{open ? <Glyphicon glyph='glyphicon glyphicon-ok' /> : ''}</td>
            <td>{price.normal}</td>
            <td>{dates.start_date} - {dates.end_date}</td>
            <td><NavLink to={'/'+ link +'/'+id} style={navlinkStyle}>
                    <Button bsStyle="info" bsSize="xsmall">
                        View details
                    </Button>
                </NavLink>
            </td>
        </tr>
    )
}


export default GridPanelItem