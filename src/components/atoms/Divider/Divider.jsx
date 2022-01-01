/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react'

const dividerStyles = {
    margin: '30 px - 20 px 20 px',
    border: 0,
    borderTop: '1px solid rgba(255, 255, 255, 0.13)'
}

const dividerContainer = {
    gridColumn: ['1 / span 5', null, '1  / span 16']
}

const Divider = () => {
    return (
        <div sx={{
            ...dividerContainer
        }}>
            <hr sx={{
                ...dividerStyles
            }}/>
        </div>
    )
}

export default Divider