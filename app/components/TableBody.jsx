import React from 'react'
import GridPanelItem from './GridPanelItem'

const TableBody = ({_data, link}) => {
    return (
        <tbody>
            {
                _data.map(row => {
                    return (
                        <GridPanelItem {...row} key={row.id} link={link} />
                        )
                    })
            }
        </tbody>
    )
}

export default TableBody