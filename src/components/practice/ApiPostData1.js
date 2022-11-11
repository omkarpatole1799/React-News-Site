import React, { useState } from 'react'

function ApiPostData() {

    const [first_name, setFirst_name] = useState();
    const [last_name, setLast_name] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [status, setStatus] = useState();


    function SubmitForm() {
        let data = { first_name, last_name, email, password, status }
        console.log(data);
        fetch("http://127.0.0.1:8000/api/insert", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((result) => {
                // console.warn("result", result)
            })
        })
    }
    return (

        <>

            <div className="container">
                <h3>Register</h3>
                <label htmlFor='first_name'>First Name</label>
                <input type="text" value={first_name} onChange={(e) => { setFirst_name(e.target.value) }} name="first_name" /> <br/>

                <label htmlFor='last_name'>Last Name</label>
                <input type="text" value={last_name} onChange={(e) => { setLast_name(e.target.value) }} name="last_name" />  <br/>

                <label htmlFor='Email'>Email</label>
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" />  <br/>

                <label htmlFor='password'>Password</label>
                <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" />  <br/>

                <label htmlFor='status'>Status</label>
                <input type="text" value={status    } onChange={(e) => { setStatus(e.target.value) }} name="status" />  <br/>

                <button type="button" onClick={SubmitForm}>Submit</button>
            </div>

        </>
    )
}
export default ApiPostData