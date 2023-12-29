import React, { useEffect, useState } from 'react';
import './uk.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ShowJapan() {
    let { id } = useParams();
    const [uk, setUk] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/studyinuk/${id}`)
            .then((response) => {
                setUk(response.data);
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
                            Study In UK
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                        components
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>Study In UK Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='col-md-12'>
                    <div className='form-img'>
                        <strong>Images:</strong>
                        <img  className="admin-img" src={`http://localhost:8000/${uk.images}`} />
                    </div>
                </div>
                <div className='details'><strong>Title:</strong> {uk.title}</div>
                <br />
                
                <div className='japan-details'><strong>Description:</strong> {uk.description}</div>
                <br />
                <div className='japan-details' >
                    <strong >Cost Of Living:</strong>
                    {uk.costofliving}
                </div>
                <br />
                <div className='japan-details'><strong>Reasons:</strong> {uk.reason}</div>
                <hr class="foooterhr"></hr>
                <div className="button" style={{ display: "flow" }}>
                    <Link to="/admin/studyinuk">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
