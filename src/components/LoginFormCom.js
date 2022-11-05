import React, { useState } from 'react'

function LoginFormCom() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [checkBox, setCheckBox] = useState(null);
    const [emailError, setEmailError] = useState(false);

    function getFormData(e){    
        e.preventDefault();
        console.log(name,email,checkBox);
    }

    function userNameHandle(e){
        let emailId = e.target.value;
        if(emailId.length <=3){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }
    }

    return (
        <>
            <div className="container pt-5">
                <h3>Login Form</h3>
                <form onSubmit={getFormData}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" onChange={userNameHandle} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {
                            emailError?<span><p>Invalid Email</p></span>:""
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputPassword1" autoComplete='on'/>
                    </div>
                    <div className="mb-3 form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        <input type="checkbox" className="form-check-input" onChange={(e)=>setCheckBox(e.target.value)} id="exampleCheck1" />
                        {/* <input type="checkbox" className="form-check-input" onChange={(e)=>setCheckBox.bind(e.target.value)} id="exampleCheck1" /> */}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {/* <button type="submit" className="btn btn-primary">Reset</button> */}
                </form>
            </div>

            <div className="container">
                <div><h3>Name: {name}</h3></div>
                <div><h3>Email: {email}</h3></div>
                <div><h3>Check-Box: {checkBox}</h3></div>
            </div>

        </>
    )
}

export default LoginFormCom