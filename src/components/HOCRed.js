import React from 'react'

function HOCRed(props) {
    return (
        <h3 style={{ backgroundColor: 'red' }}>
            <props.cmp />
        </h3>
    )
}

export default HOCRed