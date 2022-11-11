import React from 'react'

function HOCGreen(props) {
    return (
        <h3 style={{ backgroundColor: 'green' }}>
            <props.cmp />
        </h3>
    )
}

export default HOCGreen