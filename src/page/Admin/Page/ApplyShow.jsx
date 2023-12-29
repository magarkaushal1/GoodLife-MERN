import React, { useEffect, useState } from 'react';
import './applynow.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ApplyShow() {
    let { id } = useParams();
    const [apply, setApply] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/applyforms/${id}`)
            .then((response) => {
                setApply(response.data);
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
                            Applications
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                        User Details
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>Applications Form Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='details'><strong>Full Name:</strong> {apply.full_name}</div>
                <div className='details'><strong>Contact No:</strong> {apply.phone}</div>
                <div className='details'><strong>Address:</strong> {apply.address}</div>
                <div className='details'><strong>Gender:</strong> {apply.gender}</div>
                <div className='details'><strong>Applying Country:</strong> {apply.applyingCountry}</div>
                <div className='details'><strong>DOB:</strong> {apply.dateOfBirth}</div>
                <div className='details' style={{ color: '#0000ff' }} >
                    <strong style={{ color: "black" }}>Email:</strong>
                    {apply.email}
                </div>
                <hr class="foooterhr"></hr>
                <div className="button" style={{ display: "flow" }}>
                    <Link to="/admin/applyforms">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
