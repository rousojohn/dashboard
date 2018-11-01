import React from 'react'


const TableHeaders = ({cols}) => {
    return (
        <thead>
            <tr>
                {cols.map((col, idx)=><th key={idx}>{col}</th>)}
            </tr>
        </thead>
    )
}

export default TableHeaders