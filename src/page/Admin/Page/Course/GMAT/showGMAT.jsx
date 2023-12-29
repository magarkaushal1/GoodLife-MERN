import React, { useEffect, useState } from 'react';
import './gmat.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ShowGMAT() {
    let { id } = useParams();
    const [gmat, setGMAT] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/gmat/${id}`)
            .then((response) => {
                setGMAT(response.data);
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
                          GMAT
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                        components
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>GMAT Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='col-md-12'>
                    <div className='form-img'>
                        <strong>Images:</strong>
                        <img  className="admin-img" src={`http://localhost:8000/${gmat.images}`} />
                    </div>
                </div>
                <div className='details'><strong>Title:</strong> {gmat.title}</div>
                <br />
                
                <div className='japan-details'>
                    <strong>Description:</strong> {gmat.des}</div>
                <br />
                <div className='japan-details' >
                    <strong >Content:</strong>
                    {gmat.content}
                </div>
                <br />
                <div className='japan-details'><strong>{gmat.subtitle1}:</strong> {gmat.des1}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{gmat.subtitle2}:</strong> {gmat.des2}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{gmat.subtitle3}:</strong> {gmat.des3}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{gmat.subtitle4}:</strong> {gmat.des4}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{gmat.subtitle5}:</strong> {gmat.des5}</div>
                <hr class="foooterhr"></hr>
                <div className="button" style={{ display: "flow" }}>
                    <Link to="/admin/gmat">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
