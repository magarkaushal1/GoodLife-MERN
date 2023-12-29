import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function () {

    const [contact, setContact] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/contactus`)
            .then(response => {
                setContact(response.data[0].data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark">Pages</a></li>
                    <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Contact Us Page</li>
                </ol>
            </nav>
            <table class="table caption-top">
                <thead>
                    <caption>Components</caption>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Location</th>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Email</th>
                        <th scope="col">URL</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                {
                    contact.map((el, index) => {
                        return <tbody>
                            <tr>
                                <td scope="row">{index + 1}</td>
                                <td>{el.location}</td>
                                <td>{el.phone}</td>
                                <td>{el.email}</td>
                                <td>{el.url}</td>

                                <td><div className="button">
                                    <Link to={`/admin/contact/update/${el._id}`}>
                                        <button className="btn btn-primary text-white" type="submit">Update</button>
                                    </Link>
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    })
                }
            </table>
        </div>
    )
}
