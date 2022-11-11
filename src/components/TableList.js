import React from 'react'
import { Table } from 'react-bootstrap'

function TableList() {
    const Users = [
        {
            name: "kaustubh", email: "kaustubh@gmail.com", address: [
                { Hno: "101", city: "nashik", country: "india" },
                { Hno: "201", city: "nashik", country: "india" },
                { Hno: "301", city: "nashik", country: "india" }
            ]
        },
        {
            name: "omkar", email: "omkar@gmail.com", address: [
                { Hno: "101", city: "nashik", country: "india" },
                { Hno: "201", city: "nashik", country: "india" },
                { Hno: "301", city: "nashik", country: "india" }
            ]
        },
        {
            name: "Rohit", email: "rohit@gmail.com", address: [
                { Hno: "101", city: "nashik", country: "india" },
                { Hno: "201", city: "nashik", country: "india" },
                { Hno: "301", city: "nashik", country: "india" }
            ]
        }
    ];

    return (
        <>
            <div className="container">
                <h3>Table</h3>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            {/* <th>#</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>

                        {
                            Users.map((item, i) =>
                                <tr key={i}>

                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Table striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <th>House No</th>
                                                    <th>City</th>
                                                    <th>Country</th>
                                                </tr>
                                                {
                                                    item.address.map((element, j) =>
                                                        <tr key={j}>
                                                            <td>{element.Hno}</td>
                                                            <td>{element.city}</td>
                                                            <td>{element.country}</td>
                                                        </tr>
                                                    )}
                                            </tbody>
                                        </Table>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>

        </>
    )
}
export default TableList