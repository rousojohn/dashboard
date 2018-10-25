import React from 'react'
import {Panel, Badge} from 'react-bootstrap'

const PanelBadge = ({title, amount}) => {
    return (
        <Panel>
            <Panel.Body>
                {title}: <Badge pullRight>{amount}</Badge>
            </Panel.Body>
        </Panel>
    )
}

export default PanelBadge