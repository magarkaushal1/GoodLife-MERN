import React, { useEffect, useState } from 'react';
import './message.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MessageShow() {
    let { id } = useParams();
    const [message, setMessage] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/messages/${id}`)
            .then((response) => {
                setMessage(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className='container'>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5'>
                    <li className='breadcrumb-item text-sm'>
                        <a className='opacity-5 text-dark'>
                            Messages
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                        User Details
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>Message Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='details'><strong>First Name:</strong> {message.first_name}</div>
                <div className='details'><strong>Last Name:</strong> {message.last_name}</div>
                <div className='details' style={{ color: '#0000ff' }} >
                    <strong style={{ color: "black" }}>Email:</strong>
                    {message.email}
                </div>
                <div className='details'><strong>Contact No:</strong> {message.phone}</div>
                <div className='details'><strong>Address:</strong> {message.address}</div>
                <div className='details' style={{ textAlign: "justify", padding: "15px" }}><strong>Message:</strong> {message.message}</div>
                <hr class="foooterhr"></hr>
                <div className="button" style={{ display: "flow" }}>
                    <Link to="/admin/message">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
