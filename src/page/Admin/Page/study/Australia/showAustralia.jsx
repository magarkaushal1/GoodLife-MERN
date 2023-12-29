import React, { useEffect, useState } from 'react';
import './australia.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ShowAustralia() {
    let { id } = useParams();
    const [australia, setAustralia] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/studyinaustralia/${id}`)
            .then((response) => {
                setAustralia(response.data);
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
                            Study In Australia
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                        components
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>Study In Australia Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='col-md-12'>
                    <div className='form-img'>
                        <strong>Images:</strong>
                        <img  className="admin-img" src={`http://localhost:8000/${australia.images}`} />
                    </div>
                </div>
                <div className='details'><strong>Title:</strong> {australia.title}</div>
                <br />
                
                <div className='japan-details'><strong>Description:</strong> {australia.description}</div>
                <br />
                <div className='japan-details' >
                    <strong >Cost Of Living:</strong>
                    {australia.costofliving}
                </div>
                <br />
                <div className='japan-details'><strong>Reasons:</strong> {australia.reason}</div>
                <hr class="foooterhr"></hr>
                <div className="button" style={{ display: "flow" }}>
                    <Link to="/admin/studyinaustralia">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
