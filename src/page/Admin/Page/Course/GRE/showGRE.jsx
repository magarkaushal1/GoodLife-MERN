import React, { useEffect, useState } from 'react';
import './gre.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ShowGRE() {
    let { id } = useParams();
    const [gre, setGRE] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/gre/${id}`)
            .then((response) => {
                setGRE(response.data);
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
                           GRE
                        </a>
                    </li>
                    <li className='breadcrumb-item text-sm text-dark active' aria-current='page'>
                        components
                    </li>
                </ol>
            </nav>
            <div className='container shadow my-5'>
                <div className='component-page-heading text-center shadow my-5'>
                    <h1>GRE Details</h1>
                </div>
                <hr class="foooterhr"></hr>
                <div className='col-md-12'>
                    <div className='form-img'>
                        <strong>Images:</strong>
                        <img  className="admin-img" src={`http://localhost:8000/${gre.images}`} />
                    </div>
                </div>
                <div className='details'><strong>Title:</strong> {gre.title}</div>
                <br />
                
                <div className='japan-details'>
                    <strong>Description:</strong> {gre.des}</div>
                <br />
                <div className='japan-details' >
                    <strong >Content:</strong>
                    {gre.content}
                </div>
                <br /><div className='japan-details'><strong>{gre.subtitle1}:</strong> {gre.des1}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{gre.subtitle2}:</strong> {gre.des2}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{gre.subtitle3}:</strong> {gre.des3}</div>
                <hr class="foooterhr"></hr>
                <div className='japan-details'><strong>{gre.subtitle4}:</strong> {gre.des4}</div>
                <hr class="foooterhr"></hr>
                <div className="button" style={{ display: "flow" }}>
                    <Link to="/admin/gre">
                        <button className="btn text-white" style={{ padding: "5px", background: "primary", margin: "5px" }} type="submit">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
