import React from 'react'
import {useLocation} from 'react-router-dom'
function UseLocation() {
    const location = useLocation();
    console.log(location);  
    return (

        <>

            <div className="container">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dignissimos corporis ex laudantium. Est quasi dolorem porro explicabo tempora.</p>
            </div>

        </>

    )
}

export default UseLocation