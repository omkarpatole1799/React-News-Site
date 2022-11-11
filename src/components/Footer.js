import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div style={{ textAlign: "center",  }}>Copyright @ {year}</div>
    )
}

export default Footer