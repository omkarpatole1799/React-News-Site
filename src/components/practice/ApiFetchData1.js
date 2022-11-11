import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
function ApiFetchData1() {

    const [data, setData] = useState([]);
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [id, setId] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        viewAll();
    }, [])
    function viewAll() {
        fetch('http://127.0.0.1:8000/api/view').then((result) => {
            result.json().then((response) => {
                setData(response.all_data)
                console.warn(response.all_data)
            })
        })
    }
    function deleteRecord(id) {
        fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((response) => {
                viewAll();
            })
        })
    }
    function getUserData(id) {
        fetch(`http://127.0.0.1:8000/api/viewWithId/${id}`).then((result) => {
            result.json().then((response) => {
                //setPreFillData(response)
                setFirst_name(response.first_name)
                setLast_name(response.last_name)
                setEmail(response.Email)
                setPassword(response.password)
                setStatus(response.status)
                setId(response.id)
            })
        })
    }

    function viewUserData(id) {
        fetch(`http://127.0.0.1:8000/api/viewWithId/${id}`).then((result) => {
            result.json().then((response) => {
                //setPreFillData(response)
                setFirst_name(response.first_name)
                setLast_name(response.last_name)
                setEmail(response.Email)
                setPassword(response.password)
                setStatus(response.status)
                setId(response.id)
            })
        })
    }

    function updateUserData() {
        console.log('hi');
        let data = { first_name, last_name, email, password, status, id }
        console.log(data);
        fetch('http://127.0.0.1:8000/api/update', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            viewAll();
            // navigate('/test');
        })
    }
    return (
        <>
            <div className="container">
                <div className="container">
                    <h2>API Table</h2>
                </div>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                            <th>Update</th>
                            <th>View</th>
                        </tr>
                        {
                            data.map((e, j) =>
                                <tr key={j}>
                                    <td>{e.first_name}</td>
                                    <td>{e.last_name}</td>
                                    <td>{e.Email}</td>
                                    <td><button className="btn btn-primary btn-sm m-2" onClick={() => deleteRecord(e.id)}>Delete</button></td>
                                    <td>
                                        <button className="submit_show btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getUserData(e.id)}>Update</button>

                                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="true" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Update user</h5>
                                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div>
                                                            <label htmlFor='first_name'>First Name</label>
                                                            <input type="text" value={first_name} onChange={(e) => { setFirst_name(e.target.value) }} name="first_name" /> <br />

                                                            <label htmlFor='last_name'>Last Name</label>
                                                            <input type="text" value={last_name} onChange={(e) => { setLast_name(e.target.value) }} name="last_name" />  <br />

                                                            <label htmlFor='Email'>Email</label>
                                                            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" />  <br />

                                                            <label htmlFor='password'>Password</label>
                                                            <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" />  <br />

                                                            <label htmlFor='status'>Status</label>
                                                            <input type="text" value={status} onChange={(e) => { setStatus(e.target.value) }} name="status" />  <br />

                                                            <label htmlFor='id'>id</label>
                                                            <input type="text" value={id} name="id" />  <br />

                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary btn-sm" onClick={() => updateUserData(e.id)}>Update</button>
                                                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <button className="submit_show btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => viewUserData(e.id)}>View Details</button>

                                        <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-backdrop="true" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">View User Data</h5>
                                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div>
                                                            <Table striped bordered hover>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>ID</th>
                                                                        <th>First Name</th>
                                                                        <th>Last Name</th>
                                                                        <th>Email</th>
                                                                        <th>Password</th>
                                                                        <th>Status</th>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>{id}</td>
                                                                        <td>{first_name}</td>
                                                                        <td>{last_name}</td>
                                                                        <td>{email}</td>
                                                                        <td>{password}</td>
                                                                        <td>{status}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>

                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default ApiFetchData1